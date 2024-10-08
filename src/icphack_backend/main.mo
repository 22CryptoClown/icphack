import Map "mo:map/Map";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Nat64 "mo:base/Nat64";
import Iter "mo:base/Iter";
import Bool "mo:base/Bool";
import Time "mo:base/Time";
import Debug "mo:base/Debug";
import UUID "mo:uuid/UUID";
import SourceV4 "mo:uuid/async/SourceV4";
import User "user";
import response "response";

actor {
  type CreateProjectReq = {
    name: Text;
    description: Text;
    agreedFee: Nat64;
    requiredDocuments: [Text];
    customerID: Text;
    workerID: Text;
  };

  type Project = {
    id: UUID.UUID;
    name: Text;
    description: Text;
    agreedFee: Nat64;
    requiredDocuments: [Text];
    supportingDocuments: [Text];
    txID: ?Text;
    customerID: Principal;
    workerID: Principal;
    signedAt: ?Time.Time;
    finalizedAt: ?Time.Time;
  };

  public type User = {
    principal: Principal;
    name: Text;
    email: Text;
    isWorker: Bool;
  };

  stable var users = Map.new<Text, User>();

  stable var workerProjectsMap = Map.new<Text, Map.Map<Text, Project>>();
  stable var customerProjectsMap = Map.new<Text, Map.Map<Text, Project>>();

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func login(newUser: User): async response.Response<User> {
    let principalText = Principal.toText(newUser.principal);
    if (Map.has(users, Map.thash, principalText)) {
      return switch (Map.get(users, Map.thash, principalText)) {
        case (?user) return {data = ?user; error = null};
        case null return {data = null; error = ?{message = "User not found"}};
      };
    };

    Map.set(users, Map.thash, principalText, newUser);

    return {data = ?newUser; error = null};
  };

  public query func self(principal: Principal): async response.Response<User> {
    let principalText = Principal.toText(principal);
    return switch (Map.get(users, Map.thash, principalText)) {
      case (?user) return {data = ?user; error = null};
      case null return {data = null; error = ?{message = "User not found"}};
    };
  };

  public func updateUser(input: User): async response.Response<User> {
    let principalText = Principal.toText(input.principal);
    let existing = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "User not found"}};
    };

    let isWorker = existing.isWorker;
    var name = existing.name;
    var email = existing.email;

    if (input.name != "") {
      name := input.name;
    };

    if (input.email != "") {
      email := input.email;
    };

    let newUser: User = {
      principal = input.principal;
      name = name;
      email = email;
      isWorker = isWorker;
    };

    Map.set(users, Map.thash, principalText, newUser);

    return {data = ?newUser; error = null};
  };

  public func createProject(input: CreateProjectReq): async response.Response<Project> {
    let workerID = Principal.fromText(input.workerID);
    let worker = switch (Map.get(users, Map.thash, input.workerID)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "Worker ID either invalid or not found"}};
    };

    if (worker.isWorker == false) {
      return {data = null; error = ?{message = "Worker ID either invalid or not found"}}
    };

    let customerID = Principal.fromText(input.customerID);
    let customer = switch (Map.get(users, Map.thash, input.customerID)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "Customer ID either invalid or not found"}};
    };

    if (customer.isWorker) {
      return {data = null; error = ?{message = "Customer ID either invalid or not found"}}
    };

    let workerProjects = switch (Map.get(workerProjectsMap, Map.thash, input.workerID)) {
      case (?projects) projects;
      case null Map.new<Text, Project>();
    };
    let customerProjects = switch (Map.get(customerProjectsMap, Map.thash, input.customerID)) {
      case (?projects) projects;
      case null Map.new<Text, Project>();
    };

    let src = SourceV4.Source();
    let id = await src.new();
    let idText = UUID.toText(id);

    let project: Project = {
      id = id;
      name = input.name;
      description = input.description;
      agreedFee = input.agreedFee;
      requiredDocuments = input.requiredDocuments;
      supportingDocuments = [];
      customerID = customerID;
      workerID = workerID;
      signedAt = null;
      finalizedAt = null;
      txID = null;
    };

    Map.set(workerProjects, Map.thash, idText, project);
    Map.set(customerProjects, Map.thash, idText, project);

    Map.set(workerProjectsMap, Map.thash, input.workerID, workerProjects);
    Map.set(customerProjectsMap, Map.thash, input.customerID, customerProjects);

    Debug.print(debug_show(idText));

    return {data = ?project; error = null};
  };

  public query func listProjects(principal: Principal): async response.Response<[Project]> {
    let principalText = Principal.toText(principal);
    let user: User = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "User ID either invalid or not found"}};
    };

    let mapToSearch = switch(user.isWorker) {
      case (true) workerProjectsMap;
      case (false) customerProjectsMap;
    };

    let projectsMap = switch (Map.get(mapToSearch, Map.thash, principalText)) {
      case (?projects) projects;
      case null return {data = null; error = null};
    };

    let projectsIter = Map.vals(projectsMap);
    let projectsArr = Iter.toArray(projectsIter);

    return {data = ?projectsArr; error = null};
  };

  public func signProject(principal: Principal, projectID: Text, txID: Text): async response.Response<Project> {
    let principalText = Principal.toText(principal);
    let user: User = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "User ID either invalid or not found"}};
    };

    if (user.isWorker) {
      return {data = null; error = ?{message = "Worker cannot sign contract"}};
    };

    let projectsMap = switch (Map.get(customerProjectsMap, Map.thash, principalText)) {
      case (?projects) projects;
      case null return {data = null; error = ?{message = "This user has no projects"}};
    };

    let existingProject = switch (Map.get(projectsMap, Map.thash, projectID)) {
      case (?project) project;
      case null return {data = null; error = ?{message = "Contract ID either invalid or not found"}}
    };

    if (existingProject.signedAt != null) {
      return {data = null; error = ?{message = "Contract already signed"}};
    };

    let newProject = {
      id = existingProject.id;
      name = existingProject.name;
      description = existingProject.description;
      agreedFee = existingProject.agreedFee;
      requiredDocuments = existingProject.requiredDocuments;
      supportingDocuments = existingProject.supportingDocuments;
      customerID = existingProject.customerID;
      workerID = existingProject.workerID;
      signedAt = ?Time.now();
      finalizedAt = existingProject.finalizedAt;
      txID = ?txID;
    };

    let customerIDText = Principal.toText(existingProject.customerID);
    let workerIDText = Principal.toText(existingProject.workerID);

    Map.set(projectsMap, Map.thash, projectID, newProject);

    Map.set(workerProjectsMap, Map.thash, workerIDText, projectsMap);
    Map.set(customerProjectsMap, Map.thash, customerIDText, projectsMap);

    return {data = ?newProject; error = null};
  };

  public func finalizationProof(principal: Principal, projectID: Text, files: [Text]): async response.Response<Project> {
    let principalText = Principal.toText(principal);
    let user: User = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "User ID either invalid or not found"}};
    };

    if (user.isWorker == false) {
      return {data = null; error = ?{message = "Customer cannot upload proof of finalization"}};
    };

    let projectsMap = switch (Map.get(workerProjectsMap, Map.thash, principalText)) {
      case (?projects) projects;
      case null return {data = null; error = ?{message = "You have no projects"}};
    };

    let existingProject = switch (Map.get(projectsMap, Map.thash, projectID)) {
      case (?project) project;
      case null return {data = null; error = ?{message = "Contract ID either invalid or not found"}};
    };

    if (existingProject.signedAt == null) {
      return {data = null; error = ?{message = "Contract is not signed yet"}};
    };

    let newProject = {
      id = existingProject.id;
      name = existingProject.name;
      description = existingProject.description;
      agreedFee = existingProject.agreedFee;
      requiredDocuments = existingProject.requiredDocuments;
      supportingDocuments = files;
      customerID = existingProject.customerID;
      workerID = existingProject.workerID;
      signedAt = existingProject.signedAt;
      finalizedAt = existingProject.finalizedAt;
      txID = existingProject.txID;
    };

    let customerIDText = Principal.toText(existingProject.customerID);
    let workerIDText = Principal.toText(existingProject.workerID);

    Map.set(projectsMap, Map.thash, projectID, newProject);

    Map.set(workerProjectsMap, Map.thash, workerIDText, projectsMap);
    Map.set(customerProjectsMap, Map.thash, customerIDText, projectsMap);

    return {data = ?newProject; error = null};
  };

  public func finalizeContract(principal: Principal, projectID: Text): async response.Response<Project> {
    let principalText = Principal.toText(principal);
    let user: User = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "User ID either invalid or not found"}};
    };

    if (user.isWorker) {
      return {data = null; error = ?{message = "Worker cannot finalize contract"}};
    };

    let projectsMap = switch (Map.get(customerProjectsMap, Map.thash, principalText)) {
      case (?projects) projects;
      case null return {data = null; error = ?{message = "This user has no projects"}};
    };

    let existingProject = switch (Map.get(projectsMap, Map.thash, projectID)) {
      case (?project) project;
      case null return {data = null; error = ?{message = "Contract ID either invalid or not found"}}
    };

    if (existingProject.supportingDocuments == []) {
      return {data = null; error = ?{message = "Contract have not been finalized by worker"}};
    };

    if (existingProject.finalizedAt != null) {
      return {data = null; error = ?{message = "Contract already finalized"}};
    };

    let newProject = {
      id = existingProject.id;
      name = existingProject.name;
      description = existingProject.description;
      agreedFee = existingProject.agreedFee;
      requiredDocuments = existingProject.requiredDocuments;
      supportingDocuments = existingProject.supportingDocuments;
      customerID = existingProject.customerID;
      workerID = existingProject.workerID;
      signedAt = existingProject.signedAt;
      finalizedAt = ?Time.now();
      txID = existingProject.txID;
    };

    let customerIDText = Principal.toText(existingProject.customerID);
    let workerIDText = Principal.toText(existingProject.workerID);

    Map.set(projectsMap, Map.thash, projectID, newProject);

    Map.set(workerProjectsMap, Map.thash, workerIDText, projectsMap);
    Map.set(customerProjectsMap, Map.thash, customerIDText, projectsMap);

    return {data = ?newProject; error = null};
  }
};