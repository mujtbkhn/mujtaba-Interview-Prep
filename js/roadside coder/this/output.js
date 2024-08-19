//ques 1
//output?

const obj = {
    firstName: "mujtaba",
    getName() {
        const firstName = "Piyush Agarwal"
        return this.firstName
    }
}

// console.log(obj.getName()); 
//mujtaba as this points to the parent in normal function

//ques 2

function makeUser() {
    return {
        name: "John",
        ref: this
    }
}

// let something = makeUser()
// console.log(something.ref.name);
//nothing as the this in ref is pointing to the parent(window) and there is nothing in there

//fix

function makeUser() {
    return {
        name: "John",
        ref() {
            return this
        }
    }
}

// let something1 = makeUser()
// console.log(something1.ref().name); //john

//ques 3

const alabala = {
    name: "alabala",
    logMessage() {
        console.log(this.name);
    }
}
// setTimeout(alabala.logMessage, 1000)
//nothing because the alabala.logMessage is now acting as a callback function and not a method and that is why pointing to the window 
//fix

const alabala1 = {
    name: "alabala",
    logMessage() {
        console.log(this.name);
    }
}
setTimeout(function() {
    alabala1.logMessage()
}, 1000) 

//ques 4
const some ={
    name: "Preeti",
    greet(){
        return `Hello ${this.name}` //parent
    },
    farewell: ()=>{
        return `Hello ${this.name}` //global
    }

}
// console.log(some.greet());
// console.log(some.farewell());

//ques 5
//create calculator
/*
let calculator = {
    //...
}
calculator.read()
calculator.sum()
calculator.mul()*/

let calculator ={
    read (){
        // this.a = +prompt("a = ", 0)
        // this.b = +prompt("b = ", 0)
    },
    sum(){
         return this.a + this.b
    },
    mul(){
         return this.a * this.b
    },
}

calculator.read()
// console.log(calculator.sum());
// console.log(calculator.mul());

//ques 6
//output

var length = 4;

function callback(){
    console.log(this.length);
}

const object = {
    length: 5,
    method(fn){
        fn() //
    }
}
// object.method(callback)
// this is a function so this will point to the global

//ques 7
// implement calc 

// const result = calc.add(10).multiply(20).subtract(10).add(20)
// console.log(result.total);

const calc ={
     total: 0,
     add(a){
        this.total += a
        return this
     },
     multiply(a){
        this.total *= a
        return this
     },
     subtract(a){
        this.total -= a
        return this
     },
}

const result = calc.add(10).multiply(20).subtract(10).add(20)
console.log(result.total);