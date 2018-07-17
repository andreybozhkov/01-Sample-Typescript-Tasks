var CustomHTTPRequest = /** @class */ (function () {
    function CustomHTTPRequest(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return CustomHTTPRequest;
}());
var myRequest = new CustomHTTPRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myRequest);
