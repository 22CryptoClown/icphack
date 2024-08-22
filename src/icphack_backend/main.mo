import Map "mo:map/Map";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Error "mo:base/Error";
import User "user";

actor {
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

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func login(newUser: User): async User {
    let principalText = Principal.toText(newUser.principal);
    if (Map.has(users, Map.thash, principalText)) {
      return switch (Map.get(users, Map.thash, principalText)) {
        case (?user) user;
        case null throw Error.reject("User not found");
      };
    };

    Map.set(users, Map.thash, principalText, newUser);

    return newUser;
  };

  public query func self(principal: Principal): async User {
    let principalText = Principal.toText(principal);
    return switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null throw Error.reject("User not found");
    };
  };

  public func updateUser(input: User): async User {
    let principalText = Principal.toText(input.principal);
    let existing = switch (Map.get(users, Map.thash, principalText)) {
      case (?user) user;
      case null throw Error.reject("User not found");
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
      role = existing.role;
    };

    Map.set(users, Map.thash, principalText, newUser);

    return newUser;
  }
};