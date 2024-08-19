//Function Declaration aka Function Statement
// function sum(n){
//   return n + n
// }
// console.log(sum(5))

//Function Expression
// const exp = function(n){ // this function is called anonymous function
//     return n + 5
// }
// console.log(exp)

//First class Functions 
//functions that can be assigned as variable to another function are called first class functions

// function greet(name){
//     return (`Hello ${name}`);
// }

// function BigGreet(){
//     console.log(greet("mujtaba") + " how are you ?"); //passed as an variable
// }
// BigGreet()

//IIFE (immediately invoked function expression)

// (function threeSum(n){
//     console.log(n +n+n);
// })(5) 

// O/P based questions

// (function(x){
//     return(function(y){
//         console.log(x);
//     })(2)
// })(1) // 1 first will check in the function then in if unable to find then in its lexical scope

// (function () {
//     var first = second = 5;
//   })();
  
//   console.log(second); // 5 bcoz second is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

// (function() {
//     var x = 1;
//     function inner() {
//       var x = 2;
//       console.log(x);
//     }
//     inner();
//   })();

// (function() {
//     var x = 1;
//     function inner() {
//       var x = 2;
//       console.log(x);
//     }
//     inner();
//     console.log(x);
//   })();

//Scope O/P based questions

//Function Scope

// for(let i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000)
// } // let has a block scope so it will create a new block scope everytime for 0 1 2 3 4 
// for(var i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000)
// }// var has a function scope and it doesnt know block scope so it will print 5 for 5 seconds

//HOISTING IN FUNCTIONS
//functions are completely hoisted in javascript 
// console.log(mujju);
// console.log(x);

// function mujju(){
//     console.log("khan");
//     return "there is something here too"
// }
// var x = 5;


// var x = 21
// var fun = function(){
//     console.log(x); 
//     var x = 20
// }
// fun() // x = undefined bcoz functions hoisted create a seperate execution phase for that function/local scope so it doesnt look for global rather looks for local scope 

//Callback function 
//those functions which can be passed inside another function are called callback function

// document.addEventListener("click", ()=>{
//     callback()
// })

//Arrow functions 

// const arrow = () =>{

// }

//normal function 

// function normal(){

// }

//Benefits 

//syntax
//Implicit return 
//gets arguments without passing the parameters
//this keyword