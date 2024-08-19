var x =10;
a() //this will create a local execution 
b() //same
console.log(x) //now above local executions are deleted as their function is over so x will look for the local variable x which is in the global execution so will print x = 10

function a(){
    var x =100; //this x is a local x 
    console.log(x) //this will point to the local variable x so will print x = 100
}
function b(){
    var x = 69; //same for them
    console.log(x)
}
