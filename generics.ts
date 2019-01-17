

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

loggingIdentity(3);



class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!