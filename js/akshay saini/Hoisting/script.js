//invocation of variables/functions before initialization is hoisting in simple terms
console.log(x) //undefined
getName() //fn in global space
console.log(getName2) //undefined as will behave like a variable
console.log(getName3) //undefined as will behave like a variable

var x = 7

function getName() {
    console.log("mujtaba")
}

// getName()
// console.log(x)
// getName //not invoked so will log the entire function here

var getName2 = () => {
    console.log("khan")
}

var getName3 = function () {
    console.log("abdul")
}

//functions defined in variables or arrow functions behave just like a variable in js, whenever a function is executed it creates a new execution env in call stack you can see it live within the call stack above the anonymous(global execution context) put a debugger on the function 


//interview asked output based question =>

function foo() {
    return bar();
    var bar = function () {
        console.log("hello");
    }
}
foo();