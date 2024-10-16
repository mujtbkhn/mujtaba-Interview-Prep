//ques 1

function sum(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);
        }
    }
}
// sum(5)(6)(1)

//ques 2

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "add") {
                console.log(a + b);
            } if (operation === "subtract") {
                console.log(a - b);
            } if (operation === "multiply") {
                console.log(a * b);
            } if (operation === "divide") {
                console.log(a / b);
            }
        }
    }
}

// evaluate("add")(5)(6)
// evaluate("subtract")(5)(6)
// evaluate("divide")(5)(6)

//ques 3
//Infinite Currying

function add(a) {
    return function (b) {
        if (b) return add(a + b) //recursion
        return a
    }
}
// console.log(add(5)(8)(6)())

function add1(a) {
    return function (b) {
        if (b) return add1(a + b)
        return a
    }
}
console.log(add1(4)(6)(5)(80)(2)())

//ques 4
//Currying vs Partial Application
//partial application is when the number of arguments passed is not equal to number of functions unlike in currying where the arguments is equal to functions
function sum(a) {
    return function (b, c) { //two arguments
        return (a + b + c) //total three arguments two functions
    }
}
const x = sum(5)
// console.log(x(2, 6));

//ques 5
//Manipulating the DOM

// function changeNameInDom(id) {
//     return function (content) {
//         document.getElementById(id).textContent = content
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     changeNameInDom("name")("Mujtaba Khan")
// });