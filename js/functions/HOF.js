//a function is said to be a higher order function if it can either return a function or accept a function as an argument

//examples of HOF
//one of the good ex of HOF is setTimeout as it expects a function in it which it returns after a delay
setTimeout(() => {
    //function written inside
}, delay);

myFunction.filter(
    //function inside 
)

//filter can also be considered as HOF as it accepts a function inside as an argument

//benefits
//HOF makes the code look very readable, maintainable

// () => {}
// (func) => {}
// (func) = () =>{}
// (func) = async() => {}

//ex of HOF 

const asyncHandler = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next)
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
}

app.post("/", asyncHandler(async (req, res, next) => {
    //logic
}))

function map(array, func) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(func(array[i]))
    }
    return output
}

const array = [5, 4, 8, 7, 9, 6, 5];

const square = (x) => {
    return x * x
}

console.log(map(array, square))


//
function doOperation(operation, number1, number2) {
    return operation(number1, number2);
}

function sumBothNumbers(number1, number2) {
    return number1 + number2;
}

doOperation(sumBothNumbers, 2, 7);
//output 9
