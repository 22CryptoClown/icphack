import Text "mo:base/Text";

module {
    public type Error = {
        message: Text;
    };

    public type Response<T> = {
        data: ?T;
        error: ?Error;
    };
}