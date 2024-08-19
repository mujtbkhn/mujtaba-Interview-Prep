//any variable that is being called before its initialization will log undefined 
/**
 * undefined is a special keyword given to variables in the hoisting (phase 1)
 * whereas if we try to access any variable which is not even initialized/written then the console will throw an error that it is not defined 
 */
console.log(x) //undefined as it is written but invoked before initialization(phase 1 of hoisting)
var x = 10
console.log(x) //will print 10

//but 
console.log(a) //this will print not defined as we havn't written any a variable anywhere 