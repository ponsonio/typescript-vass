
 // Los tipos de variables en TS (built in o primitivos ) pueden ser :Boolean;Number;String;Array;Tuple;Enum;Any;Void;Function.

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(`octal : ${ octal }`);

let nombre: string = 'Alex';
let isPresent: boolean = true;

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;



// Anytype : utiliza el type cheking 

let myVariable: any = 'This is a string'

//Arrays
let list1: number[] = [1, 2, 3];

//Generics
let list: Array<number> = [1, 2, 3];


// Tuples

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error


//Emuns
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(`color: ${ c }`);
console.log(`color name: ${ colorName }`);

//void

function warnUser(): void {
    console.log("This is my warning message");
}


//never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


//return

function capitalizeName (name : string) : string {
    return name.toUpperCase();
  }

//function
let multiply : (first : number, second : number) => number;
multiply = function (first, second) {
  return first * second;
}