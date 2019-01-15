"use strict";
var Greeter = /** @class */ (function () {
    //constructor 
    function Greeter(user) {
        this.user = user;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.user;
    };
    return Greeter;
}());
var g = new Greeter("Susana");
console.log(g.greet());
