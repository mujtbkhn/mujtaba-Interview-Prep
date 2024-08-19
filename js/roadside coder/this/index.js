//this keyword (implicit binding)
// this keyword is used for referencing objects in the defined context 

this.a = 5;
// console.log(this.a);

//normal function
this.b = 6;
function normal() {
    console.log(this.b);
}
// normal()
const arrow = () => {
    console.log(this.b);
}
// arrow()

//both will point to this.b = 6 as this is the only parent object however it doesnt work the same

let user = {
    name: 'mujju',
    age: 22,
    getDetails() {
        console.log(this.name);
    }
}
// user.getDetails() //point to the parent object as in normal function

let user1 = {
    name: 'mujju',
    age: 22,
    childObj: {
        newName: "abdul",
        getDetails() {
            console.log(this.newName + this.name);
        }
    }
}
// user1.childObj.getDetails() //will print abdul and undefined/empty as normal function only points to the immediate parent 
let user2 = {
    name: 'mujju',
    age: 22,
    childObj: {
        newName: "abdul",
        getDetails: () => {
            console.log(this.newName + this.name);
        }
    }
}
// user2.childObj.getDetails() //will print undefined as no window to point in the arrow functions case

let user3 = {

    name: 'mujju',
    age: 22,
    getDetails() {
        const nestedArrow = () => console.log(this.name);
        nestedArrow()

    }
}
// user3.getDetails() //will consider user3 as parent now because we wrote a function(nestedArrow)


let user4 = {

    name: 'mujju',
    age: 22,
    getDetails:( )=> {
        console.log(this.name);

    }
}
user4.getDetails() //will print empty as now the parent function doesnt have anything

const name = "abudlllll"
class users {

    constructor(n){
            this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new users("Mujtaba Khan")
// console.log(User);
// User.getName(); //this points to class variables inside a class

