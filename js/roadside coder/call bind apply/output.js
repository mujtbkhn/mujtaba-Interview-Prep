//ques 1

const person = { name: "mujtaba" }
function sayHi(age) {
    return `${this.name} is ${age}`
}

// console.log(sayHi.call(person, 22));
// console.log(sayHi.bind(person, 22));

//mujtaba is 22
//returns a function

//ques 2

const age = 10;
var person1 = {
    name: "Abdullah",
    age: 20,
    getAge: function () {
        return this.age
    }
}
// console.log(person1.getAge())

var person2 = { age: 25 }

// console.log(person1.getAge.call(person2))

//25 because getAge will now point at person2 for values because of call

//ques 3

var status = '🫨'

setTimeout(() => {
    const status = '😱'

    const data = {
        status: "🛀🏼",
        getStatus() {
            return this.status
        }
    }
    // console.log(data.getStatus()); //🛀🏼
    // console.log(data.getStatus.call(this)); //🫨
}, 0)

//ques 4
//call printAnimals such that it prints all the animals in object
const animals = [
    { species: "Lion", name: "King" },
    { species: "whale", name: "Queen" }
]

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name);
    }
    this.print()
}
// printAnimals()

//output
for (let i = 0; i < animals.length; i++) {

    // console.log(printAnimals.call(animals[i], i))
}


//ques 5
//append an array without creating a new array

const array = [1, 5, 7, 8]
const elements = ["hi", 2, "ha meri jaan", "chalo", 6]

array.push.apply(array, elements)
// console.log(array)
// for (let i = 0; i < elements.length; i++) {
//     array += elements[i]
// }
// console.log(array);

// array.push(elements)
// console.log(array);

//ques 6 
//apply for enhancing built in functions

const array1 = [1, 5, 7, 8]
// console.log(Math.max(array1)) //NaN bcoz cannot use Math.max on array directly
// console.log(Math.max.apply(null, array1));

//ques 7

function f() {
    // console.log(this);
}

let user3 = {
    g: f.bind(null)

}
user3.g()

//window

//ques 8
function f() {
    console.log(this.name);
}

f = f.bind({ name: "Mujju" }).bind({ name: "Khan" })

// console.log(f());

//ques 9
//fix the code to work properly

function checkPassword(success, failed) {
    let password = prompt("Password?", "")
    if (password == "Mujtaba") {
        success()
    } else {
        failed()
    }
}

let obje = {
    name: "Abdul Rehman Mujtaba Khan",

    loginSuccessful() {
        console.log(`${this.name} is logged in`);
    },
    loginFailed() {
        console.log(`${this.name} failed to log in`);
    }
}
// checkPassword(obje.loginSuccessful.bind(obje), obje.loginFailed.bind(obje)) //bind creates a new function that has its this keyword set to the provide value in this case to obje so whenever this functions are called they check for the name value using this

//ques 10
const age1 = 10
var person1 = {
    name: "ateeb",
    age: 20,
    getAgeArrow: () => console.log(this.age),
    getAge: function () {
        console.log(this.age);
    }
}
var person2 = { age: 24 }
// person1.getAge.call(person2) // 24
// person1.getAge.call(person2) //24
// person1.getAgeArrow.call(person2) //undefined as we cant modify arrow function with call bind and apply 

