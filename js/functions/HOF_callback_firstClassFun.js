// Higher-order function: operate
// This function takes two numbers and a callback function as arguments
// It applies the callback function to the two numbers and returns the result
const operate = (num1, num2, callback) => {
    return callback(num1, num2);
};

// Callback function: add
// This function adds two numbers
const add = (a, b) => {
    return a + b;
};

// Callback function: subtract
// This function subtracts the second number from the first number
const subtract = (a, b) => {
    return a - b;
};

// Callback function: multiply
// This function multiplies two numbers
const multiply = (a, b) => {
    return a * b;
};

// Example usage of the operate function with different callback functions
console.log(operate(5, 3, add)); // Output: 8 (5 + 3)
console.log(operate(5, 3, subtract)); // Output: 2 (5 - 3)
console.log(operate(5, 3, multiply)); // Output: 15 (5 * 3)


// in this example:

// Callback Function: add, subtract, and multiply are callback functions. They are passed as arguments to the operate function and are invoked within operate.

// Higher-order Function: operate is a higher-order function because it takes another function (callback) as one of its parameters.

// First-Class Function: JavaScript treats functions as first-class citizens, meaning they can be passed around and used as values. In this example, add, subtract, and multiply are all first-class functions.

// This example demonstrates the flexibility and power of using callback functions and higher-order functions in JavaScript.





