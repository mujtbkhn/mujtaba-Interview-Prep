// var let and const 

//var is functional scope , let and const are block scoped

// function scope(){
//     var a = 'hi'
//     console.log(a)
// }
// scope()

// {
//     let a = 5;
//     console.log(a);
// }
// {
//     const a = 15;
//     console.log(a);
// }

// shadowing
//variable shadowing

// function shadow(){
//     let a = 5;
//     {
//         let a =15
//         console.log(a);  // 15
//     }

//     console.log(a); // 5
// }
// shadow() 
// function shadow(){
//     var a = 5;
//     {
//         var a =15
//         console.log(a); //15
//     }

//     console.log(a); // 15
// }
// shadow() //as var is functional 15 will be for both as js runs line by line

// Illegal shadowing
// function illegalShadow(){
//    var a = 5;
//     {
//        let a = 15;
//         console.log(a); // 15 
//     }
//     console.log(a); // 5
// }
// illegalShadow() //var can be shadowed with let but not the same for any of them with var being the block scoped

// Declaration
// correct
// var a 
// var a 
// not correct 
// let a 
// let a 

// const a 
// const a


//Declaration without initializaiton
// correct
// var a 
// let a

//not correct
// const a

// Hoisting

// during the creation phase javascript engines take all the variable and function declarations at the top and this is called hoisting
// console.log(a);
// var a =5 //undefined not error because of hoisting

// similarly for let and const
// console.log(b);
// console.log(c);
// let b = 15;
// const c = 42;
//but this will throw an error although they are also declared undefined but they handle it differently called temporal dead zone which is the time taken from declaration to initialization

//good for practice
//https://dandkim.com/js-var-let-const/