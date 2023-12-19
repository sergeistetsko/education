var name = 'Abe';
var greet_abe = (function(name) {
    return function() {
        return "Hello, " + name + '!';
    };
})(name);

name = 'Ben';
var greet_ben = (function(name) {
    return function() {
        return "Hello, " + name + '!';
    };
})(name);

