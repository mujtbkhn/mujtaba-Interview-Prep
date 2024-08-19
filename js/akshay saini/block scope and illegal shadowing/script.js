/**
 * Var is function scoped and let and const are block scoped, with the help of scopes we can write large code in our scope, 
 */
var a = 50
let b = 60;
const c = 90;

console.log(a) //this will log the value of a before it was overwritten
/**
 * when we try access variables inside a block it first looks inside the block and if found returns it or else looks for it in the lexical scope
 */
{
    //shadowing : the variables with the same name inside the blocks shadows the variables outside the block with the same name 
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}

/**
 * when we try to log the values after the block scope, values of let and const remain the same as they are inside a BLOCK in the scope and here they are inside SCRIPT scope but the var is in the GLOBAL scope inside and outside the block scope so its value is overwritten now to 10
 */
console.log(a)
console.log(b)
console.log(c)

//ILLEGAL SHADOWING
//when you try to shadow a variable with a different keyword it is called illegal shadowing

var x = 40
{
    var x = 20
    console.log(x) // this is legal shadowing 
    
}

var k = 99;
{
    let k = 49
    console.log(k) // this is illegal shadowing, where in we shadow a variable with another keyword 
    // const k =69 
    // console.log(k)
}

// NOTE: only var to let and const illegal shadowing is allowed not vice versa

// const u = 88
// {
//     var u = 78;
//     console.log(u)
// }

// let p = 57;
// {
//     var p = 67
//     console.log(p)
// }