//Objects 
//objects are key'ed collection of various data and complex utilities , objects can be created using curly brackets
//an object is a collection of properties , property is a association b/w key(name) and a value

//when you try to convert objects to strings forcefully (directly) they are converted into [object Object]
const obj = {
    name: "mujju khan",
    age: 22,
    domain: "web development"
}

//accessing the obj

// console.log(obj);

//modifying any property
obj.name = "Mujtaba khan"
// console.log(obj);

//deleting any property
delete obj.age
// console.log(obj);

//adding any property
obj.age = 25
// console.log(obj);

//Question 

const func = (function (a) {
    delete a;
    return a;
})(5)

// console.log(func) //output? 

// answer: 5 because a in here is a primitive value and delete only works on objects

//Properties in objects

const property = "firstName"
const name = "Abdul Rehman Mujtaba"

//we want to print  "firstName": "Abdul Rehman Mujtaba"

const user = {
    property: name
}

// console.log(user); // this will print property: "Abdul Rehman Mujtaba"

//for accessing values inside a key :

const user1 = {
    [property]: name
}
// console.log(user);

//Looping through objects
const user2 = {
    name: "roadside",
    age: 22,
    isTotallyAwesome: true
}
for (key in user2) {
    console.log(user2[key]);
}