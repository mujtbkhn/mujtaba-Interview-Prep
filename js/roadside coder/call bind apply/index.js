//CALL APPLY AND BIND
//Call 
//call lets you invoke(call) an object with a specified this context and arguments provided individually

function greet() {
    return "Hello, this is " + this.name 
}
const user = {
    name: "Mujtaba"
}
// console.log(greet.call(user)); //this lets you call the object user inside greet with this.name

function hello(age, profession){
    return "Hello, this is " + this.name + " he is "+ age + " years old" + " is a " + profession
 }
 const user1={
    name: "abdul"
 }  
//  console.log(hello.call(user1, 22, "software developer")); // call with arguments

//Apply
//apply works the same as call but expects arguments in array

function hello(age, profession){
    return "Hello, this is " + this.name + " he is "+ age + " years old" + " is a " + profession
 }
 const user2={
    name: "rehman"
 }  
//  console.log(hello.apply(user1, [22, "software developer"])); // apply within an array

 //Bind
 //bind lets us call another function inside our function instead of directly calling like the call and apply, basically we need to call any function twice to see it 

//  console.log(hello.bind(user1)); //this will give a function in return 
 const bindFun = hello.bind(user1); //this will give a function in return 
// console.log( bindFun(21, "IT guy")) //this is the function we want 
// console.log( bindFun(26, " engineer")) //we can reuse it 

//call bind and apply uses explicit binding 