//Closures: 
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
//lexical Scope lets you have access to a variable defined outside a function inside another function but the same is not true

var name = "mujju"
// global scope
function local(){
// inner scope
    console.log(name); //this will access mujju because of lexical scope
}
local()


// function subscribe(){
//     var name = "mujju"
//inner scope 2
//     function subscribe1(){
//inner scope
//         alert (name) //accessible due to closures(lexical scope)
//     }
//     subscribe1()
// }
// subscribe()

//MDN ex
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   const myFunc = makeFunc();
//   myFunc();

/*a closure has access to three scopes
1. Local Scope(own scope)
2. outer function scope
2. Global Scope

*/
/*var globalName = "global"
//global scope
function makeFunc() {
   const outerName = "Mozilla";
   //outer function scope
   function displayName() {
       //local scope
       const name = "local"
     console.log(name, outerName, globalName);
   }
   displayName();
 }

 
 var myFunc = makeFunc();
 myFunc();

 */

/*

// global scope
const e = 10;
function sum(a) {
return function (b) {
  return function (c) {
    // outer functions scope
    return function (d) {
      // local scope
      return a + b + c + d + e;
    };
  };
};
}

console.log(sum(1)(2)(3)(4)); // 20
*/

//USE CASES
// https://www.linkedin.com/pulse/practical-applications-closure-javascript-s-heaven/
// https://www.ilyameerovich.com/3-use-cases-for-closures/

//O/P based Closures questions
//1.
// let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1
//         console.log(count);
//     }
//     console.log(count);
// })() // 1(shadowing) 0(global scope) 

//2. 
//write a function that would allow you to 
// var addSix= createBase(6)
// addSix(12) // returns 18

// function createBase(n){
//     return function(value){
//n is accessible because of lexical scope
//          console.log(value + n);
//     }
// }

// var addSix = createBase(6)
// addSix(10)
// addSix(6)

//3. 
//private counter

// function counter(){
//     var _counter = 0

//     function add(increment){
//         _counter += increment  //accessing outer scope
//     }
//     function retrieve(){
//         return "Counter is: "+ _counter
//     }

//     return{
//         add, 
//         retrieve
//     }
// }
// const c = counter()
// c.add(5);
// c.add(15);
// console.log(c.retrieve()) //20 here we are manipulating the counter without actually changing its values 

//4.
//Module pattern

// var module = (function(){
//     function privateMethod(){
//         console.log("private"); // not accessible
//     }
//     return{
//         publicMethod: function(){
//             // privateMethod() // can be accessible in public 
//             console.log("public");
//         }
//     }
// })()
// module.publicMethod()
// module.privateMethod()

//5. 
// make this only run once
// let view 
// function like(){
//     view="mujju"
//     console.log("subscribe", view);
// }

// like()
// like()
// like()

// let view
// let count = 0 
// function like(){
//     count++
//     view="mujju"
//     if(count>1){
//         console.log("ALready subs to ", view);
//     }else{
//         console.log("subscribe", view);
//     }
// }

// like()
// like()
// like()
// like()
// like()

//6. Caching/Memoize Polyfill

// function myMemoize (fn, context){
//     const res = {}
//     return function(...args){
//         const argsCache = JSON.stringify(args);
//         if(!res[argsCache]){
//             res[argsCache] = fn.call(context || this, ...args)
//         }
//         return res[argsCache]
//     }
// }

// const clumsySquare = (num1, num2) => {
//     for (let i = 1; i < 1000; i++) {
//         return num1 * num2
//     }
// }

// const memoizedSquare = myMemoize(clumsySquare)

// console.time("First Call")
// console.log(clumsySquare(65144,65244));
// console.timeEnd("First Call")

// console.time("Second Call")
// console.log(clumsySquare(65144,65244));
// console.timeEnd("Second Call")
// console.time("First Call")

// console.log(memoizedSquare(65144,65244));
// console.timeEnd("First Call")

// console.time("Second Call")
// console.log(memoizedSquare(65144,65244));
// console.timeEnd("Second Call")