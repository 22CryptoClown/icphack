import Map "mo:map/Map";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Nat64 "mo:base/Nat64";
import Blob "mo:base/Blob";
import UUID "mo:uuid/UUID";
import SourceV4 "mo:uuid/async/SourceV4";
import User "user";
import response "response";

actor {
  type Project = {
    id: UUID.UUID;
    name: Text;
    description: Text;
    agreedFee: Nat64;
    requiredDocuments: [Blob];
    supportingDocuments: [Blob];
    customerID: Principal;
    workerID: Principal;
  };

  type UserType = {
    #Customer;
    #Worker;
  };

  public type User = {
    principal: Principal;
    name: Text;
    email: Text;
    role: UserType;
  };

  stable var users = Map.new<Text, User>();

  stable var workerProjectsMap = Map.new<Text, Map.Map<Text, Project>>();
  stable var customerProjectsMap = Map.new<Text, Map.Map<Text, Project>>();

  public func createProject(input: Project): async response.Response<Project> {
    let workerID = Principal.toText(input.workerID);
    let worker = switch (Map.get(users, Map.thash, workerID)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "Worker ID either invalid or not found"}};
    };

    if (worker.role != #Worker) {
      return {data = null; error = ?{message = "Worker ID either invalid or not found"}}
    };

    let customerID = Principal.toText(input.customerID);
    let customer = switch (Map.get(users, Map.thash, customerID)) {
      case (?user) user;
      case null return {data = null; error = ?{message = "Customer ID either invalid or not found"}};
    };

    if (customer.role != #Customer) {
      return {data = null; error = ?{message = "Customer ID either invalid or not found"}}
    };

    let workerProjects = switch (Map.get(workerProjectsMap, Map.thash, workerID)) {
      case (?projects) projects;
      case null Map.new<Text, Project>();
    };
    let customerProjects = switch (Map.get(customerProjectsMap, Map.thash, customerID)) {
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
      supportingDocuments = input.supportingDocuments;
      customerID = input.customerID;
      workerID = input.workerID;
    };

    Map.set(workerProjects, Map.thash, idText, project);
    Map.set(customerProjects, Map.thash, idText, project);

    Map.set(workerProjectsMap, Map.thash, workerID, workerProjects);
    Map.set(customerProjectsMap, Map.thash, customerID, customerProjects);

    return {data = ?project; error = null};
  };

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

    let role = existing.role;
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
      role = role;
    };

    Map.set(users, Map.thash, principalText, newUser);

    return {data = ?newUser; error = null};
  }
};