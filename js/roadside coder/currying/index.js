//Currying
//currying in javascript means a function with one argument at a time that returns another function expecting the next argument

function f(a){
    return function (b){
        console.log(a,b);
    }
}
// console.log(f(5)(5));

//use cases:
/**
 * to avoid passing same arguments
 * make code cleaner
 * make code pure
 * less prone to error
 */

