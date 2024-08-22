import Map "mo:map/Map";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Error "mo:base/Error";
import User "user";

actor {
  type User = {
    principal: Principal;
    name: Text;
    email: Text;
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
  }
};