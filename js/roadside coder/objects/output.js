//ques 1
//output?

const obj1 = {
    a: "one",
    b: "two",
    a: "three"
}
// console.log(obj1);

//output: a:"three", b:"two" => bcoz a is declared twice and js takes the most bottom value for same names 

//ques 2
//multiply all values with 2

let nums = {
    a: 100,
    b: 200,
    affan: "haula"
}
multiply(nums)
function multiply(obj) {
    for (key in obj) {
        if ((typeof obj[key] === "number")) {
            obj[key] *= 2
        }
    }
}

// console.log(nums);

//ques 3
//output

const a = {}
const b = { key: "b" }
const c = { key: "c" }

a[b] = 123
a[c] = 456

// console.log(a[b]); 

//output: 456 bcoz as b was assigned to a and as b is an object it cannot be assigned as a key bcoz of object so it gets assigned as ["object Object"] similarly for c as well so when we call a value it will be the last assigned value 

//ques 4 
//JSON.stringify and JSON.parse

//JSON.stringify lets you convert objects to strings and JSON.parse lets you convert strings back to object
//this can be beneficial during setting and getting values from localStorage

const local = {
    user: "mujju",
    age: 22
}

const strLocal = JSON.stringify(local)

localStorage.setItem("item", strLocal)

// console.log(JSON.parse(localStorage.getItem("item"))) //gives object

//ques 5
//spread operator

// console.log([..."mujtaba"]); 
//will spread every char

//ques 6
//output

const user3 = {
    name: "nabil",
    age: 26
}
const admin = { admin: true, ...user3 }
// console.log(admin);

//ques 7
//output

const settings = {
    username: "mujjuu",
    level: 19,
    health: 90
}
// console.log(JSON.stringify(settings, ["level", "health"])); 
//will only stringify the defined properties(ie level and health)

//ques 8 
//output?
/*radius = 10*/
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius,
}
// console.log(shape.diameter());
// console.log(shape.perimeter());
//output
// 20 bcoz will point to the parent (normal function) and will give 10 * 2 = 20
// NaN bcoz will point to global (arrow function) and will give NaN as there is no global variable for radius

//ques 9
//destructing in objects??
//taking out specific properties from objects is called destructuring of objects

let user5 = {
    name1: "akshay",
    age: 26,
    fullname: {
        first: "abdul",
        last: "khan"
    }
}

const { name1 } = user5; //destructuring object
// console.log(name1);

const { fullname: { first } } = user5 //destructuring nested object
// console.log(first);

//ques 10

function getItems(fruitList, favoriteFruit, ...args) { //remember rest operator cannot be on any other place except the last
    return [fruitList, ...args, favoriteFruit] //while spread operator can be anywhere
}

// console.log(getItems("banana", "apple","orange","pineapple","chiku"));

//ques 11
//Object Referencing: Object referencing in JavaScript is a mechanism that allows you to store the location of an object in memory. This is done by assigning the object to a variable. The variable will then contain a reference to the object, rather than the object itself.
// This can be useful for a number of reasons. For example, it allows you to pass objects to functions without having to copy them. It also allows you to share objects between different parts of your code.
let c1 = { greeting: "Hey" }
let d1;

d1 = c1;
c1.greeting = "Hello";
// console.log(d1.greeting);
//output: Hello, as we are providing the reference of c1 in d so any change in c will change d1
//any change made in either will affect both as they have the same reference

//ques 12

// console.log({a: 1} == {a: 1}); 
// console.log({a: 1} === {a: 1}); //This condition will always return 'false' since JavaScript compares objects by reference
//false
//false
// both the objects have different memory space

//ques 13

let person = { name: "mujju" }
const members = [person]

person = null
// console.log(members)
//output: {name: "mujju"} bcoz we are not making any variable null in members rather the whole and if we provide any variable as null then it will result in making members as null too

//ex: 
// const members1 = [person]
// person.name = null
// console.log(members1);
//output: {name: "null"}

const value = { number: 10 }
const multiply2 = (x = { ...value }) => {
    console.log((x.number *= 2));
}

multiply2()
multiply2()
multiply2(value)
multiply2(value)
multiply2(value)

//20 20 20 40 because the first two will print as defined in the third we are directly accessing the value itself and not its reference so it will now change the value of number to 20 and as now the number is 20 the operations for the fourth value is 20 * 2 = 40 and so on....

/**
why are the first two outputs NaN
const value = { number: 10 }
const multiply2 = (x = { value }) => {
    console.log((x.number *= 2));
}

multiply2()
multiply2()
multiply2(value)
multiply2(value)

ChatGPT
The first two outputs are NaN because of how default parameter values work in JavaScript, combined with object destructuring and assignment within the parameter list.

Let's break down the function:

javascript
Copy code
const multiply2 = (x = { value }) => {
    console.log((x.number *= 2));
}
This function multiply2 takes an object x as a parameter, with a default value of { value }. Here, { value } is shorthand for { value: value }, meaning the default value for x is an object with a property value which will be assigned the value of whatever is passed in when the argument is not provided.

Now, when you call multiply2() the first time, since no argument is provided, x gets the default value { value }, where value is undefined. Therefore, x.number is undefined, and when you try to multiply undefined by 2, it results in NaN.

The same happens in the second call to multiply2(). Again, no argument is provided, so x gets the default value { value }, which again results in x.number being undefined, leading to NaN.

In the third and fourth calls, you pass the value object. Here, x gets the passed object, { number: 10 }. Therefore, x.number is 10, and when you multiply 10 by 2, you get 20, which is correctly logged.
 */

//ques 14
