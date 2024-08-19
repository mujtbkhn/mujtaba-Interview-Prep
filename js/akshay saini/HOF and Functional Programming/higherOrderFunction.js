//A high order function is a function which takes other function as an argument and Returns function, the other and simple definition is, A high-order function in programming is a function that does at least one of the following:

// 1 - Takes one or more functions as arguments (i.e., procedural parameters),
// 2 - Returns a function as its result.

//     High - order functions are a key part of functional programming, and they’re also used quite widely in more imperative - style programming.High - order functions allow us to create more generic functions, reduce code duplication, and can lead to code that is easier to read and maintain.

function map(array, fun) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(fun(array[i]))
    }
    console.log(result)
    return result
}

let array = [2, 5, 6, 7, 8, 9]
let square = function (x) {
    return x * x
}
map(array, square)

//in this code, function map takes in two arguments 1. array 2. function and calculate a result accordingly as a function is being passed as argument inside map this makes it a higher order function

