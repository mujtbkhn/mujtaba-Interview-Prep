
console.log(a) // undefined as it is present in the global space with the undefined hoisting
console.log(b) 


var a = 100;
let b = 10;
/**
 * in case of let and const they too are hoisted, but not in the global space but in the script space, thus they cant be called in the global space so not assigned with the undefined, 
 * TEMPORAL DEAD ZONE: it is the time when let and const are hoisted till they are initialized, they are in a temporal dead zone, we cant access them till their initialization so we get the Reference error of cant access before initialization
 * 
 * three types of errors:
 * 1. Reference Error: when we try to access let and const before their initialization,
 * when we try to access a variable which isn't being assigned any value
 * 2. Syntax Error: when you try to just initialize a constant variable
 * 3. Type Error: when you try to re-declare a constant variable 
 * 
 * HOW TO AVOID TEMPORAL DEAD ZONE: by putting all let and const variables at the top of the codebase
 */

//var let and const 

// var can be re-declared as well as reinitialized
var x;
var x = 10;  // re-initialized and re-declared
var x = "hello";  // re-initialized and re-declared


//let can be re-initialized but not re-declared
let y;
y = 10;  // re-initialized
// let y = 54;  // error: Identifier 'y' has already been declared


//const can neither be re-initialized nor re-declared
// const z;  // error: Missing initializer in const declaration
const z = 45;
// const z = 87;  // error: Identifier 'z' has already been declared
// z = 50;  // error: Assignment to constant variable.
