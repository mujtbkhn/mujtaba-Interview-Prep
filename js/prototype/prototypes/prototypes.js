//__proto__ object

const me = {} //created an empty object
console.log(me) //this will log nothing but an [[prototype]] object which will have all the defined methods of an object from the Object

// console.log(me.age())
// console.log(me.name())//both of these will print undefined as we dont have any age and name methods

// console.log(me.toString()) //but this will print Object as its a defined method in the [[prototype]]

//similarly we have prototypes in array 
// const brother = ['nabil', 'affan'] 
// console.log(brother) //wherein the array has its own defined set of methods in the [[prototype]] Array along with a [[prototype]] Object so it can access the array methods as well as the global object methods


//similarly for strings, string have their defined methods too and if you want to access all the methods in the browser you cant log them just like objects and arrays
// const str =  'hey i am a string'
// console.log(str.__proto__) //you need to use the __proto__ property to get all the string methods along the [[prototype]] Object

//SO ALL OF THESE DATA TYPES INHERIT PROPERTIES FROM OBJECTS