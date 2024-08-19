const human = {
    kind: "human"
}

const sina = Object.create(human)
console.log(sina.kind)

// sina.age = 35

console.log(sina)

const ben = Object.create(sina)

// ben.age = 18

console.log(ben)

const jaydev = Object.create(ben)
console.log(jaydev.age)

//prototype === __proto__

function Dude(name) {
    this.name = name
}

const me = new Dude('adnan shia?')
console.log(me)

console.log(Dude.prototype)
console.log(me.__proto__)
//both print the same thing

console.log(Dude.prototype === me.__proto__) //true

//so we can understand from here 
/**
 * __proto__ is a property of every variable thats pointing to the parent object where its inheriting from whereas the prototype is property of the constructor function from where all the properties will be inherited thats why console.log(Dude.prototype === me.__proto__) //true
 */