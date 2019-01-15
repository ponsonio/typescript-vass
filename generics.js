/**
function identity(arg: number): number {
    return arg;
}

function identity(arg: any): any {
    return arg;
}
*/
function identity(arg) {
    return arg;
}
var outputA = identity("myString"); // type of output will be 'string'
var outputB = identity("myString"); // type of output will be 'string'
var outputC = identity(10);
console.log("outputA : " + typeof outputA);
console.log("outputB : " + typeof outputB);
console.log("outputC : " + typeof outputC);
