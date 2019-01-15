

/** 
function identity(arg: number): number {
    return arg;
}

function identity(arg: any): any {
    return arg;
}
*/

function identity<T>(arg: T): T {
    return arg;
}

let outputA = identity<string>("myString");  // type of output will be 'string'

let outputB = identity("myString");  // type of output will be 'string'

let outputC = identity(10);

console.log(`outputA : ${ typeof outputA }`);
console.log(`outputB : ${ typeof outputB }`);
console.log(`outputC : ${ typeof outputC }`);


//Generic Constraints 

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity("3"); 
