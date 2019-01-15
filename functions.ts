
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };


//pueden acceder a variables fuera de ella misma

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}


function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };


let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };


//Optional and default parameters 

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
 //let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

