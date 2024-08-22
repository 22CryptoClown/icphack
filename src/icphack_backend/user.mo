import Principal "mo:base/Principal";
import Text "mo:base/Text";

actor class User(id: Principal, name: Text, email: Text) {
    public func getId() : async Principal {
        return id;
    };
    
    public func getName() : async Text {
        return name;
    };
    
    public func getEmail() : async Text {
        return email;
    };
};