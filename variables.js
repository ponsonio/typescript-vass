// Los tipos de variables en TS (built in o primitivos ) pueden ser :Boolean;Number;String;Array;Tuple;Enum;Any;Void;Function.
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("octal : " + octal);
var nombre = 'Alex';
var isPresent = true;
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
// Anytype : utiliza el type cheking 
var myVariable = 'This is a string';
//Arrays
var list1 = [1, 2, 3];
//Generics
var list = [1, 2, 3];
// Tuples
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
//Emuns
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log("color: " + c);
console.log("color name: " + colorName);
//void
function warnUser() {
    console.log("This is my warning message");
}
//never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//return
function capitalizeName(name) {
    return name.toUpperCase();
}
//function
var multiply;
multiply = function (first, second) {
    return first * second;
};
