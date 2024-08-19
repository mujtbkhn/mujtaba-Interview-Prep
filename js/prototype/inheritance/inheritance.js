class Person {
    talk() {
        return 'Talking'
    }
}

const me = new Person()
const you = new Person()


console.log(me.talk())
console.log(you.talk())


console.log(me) //returns a __proto__ which is an object which has a constructor and the function talk we got from class person , and also the __proto__ object which has all the properties


console.log(Person.prototype === me.__proto__) //true

//so if you want to change something in the Person class and make it reflect in the inherited classes 
Person.prototype.talk = function () {
    return 'new and improved talking'
}
console.log(me.talk())
console.log(you.talk())

//Prototype vs Methods

function Mujtaba() {
    this.age = 22 //this is a constructor function and it is outside the __proto__ object 
}
const newMe = new Mujtaba
console.log(newMe)

Mujtaba.age = 35 //changing the original function
console.log(newMe) //still the age is 22 because the age of the function is outside the __proto__ and this makes it a function not a method and in order for a property to be reflected in inherited classes the value should be a method

//Extending classes

class Superhuman extends Person {
    fly() {
        return 'flying to the mooonnnn'
    }
}

const we = new Superhuman()
console.log(we.fly())
console.log(we.talk())
// console.log(me.fly())

//CREATE INHERITANCE CHAIN

const cook = {
    food() {
        return 'Tahari'
    }
}
const obj = {}

Object.setPrototypeOf(obj, cook)
// console.log(obj.food())

//USE CASES: WHEN WE HAVE SHARED BEHAVIOURS OR SHARED FUNCTIONALITIES AND WE WANT THE CODE TO BE REUSABLE AND OBEY THE DRY PRINCIPLE 