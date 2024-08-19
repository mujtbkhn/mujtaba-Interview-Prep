//CALL

const properties ={
     color: "red",
     company: "ferrari"
 }

 function purchaseCar(currency, price){
    console.log(`I have purchase ${this.color} - ${this.company} car for ${currency}${price}` );
 } 

Function.prototype.myCall = function(context= {}, ...args){
    if(typeof this !== "function"){
        throw new Error (this + "function is not callable")
    }
    context.fn = this;
    context.fn(...args)
}
//  purchaseCar.myCall(properties, "$", "5000000")
//  purchaseCar.call(properties, "$", "5000000")

//APPLY
const properties1 ={
     color: "red",
     company: "ferrari"
 }

 function purchaseCar(currency, price){
    console.log(`I have purchase ${this.color} - ${this.company} car for ${currency}${price}` );
 } 

Function.prototype.myApply = function(context= {}, args = []){
    if(typeof this !== "function"){
        throw new Error (this + "function is not callable")
    }
    if(!Array.isArray(args)){
        throw new Error ("CreateListFromArrayLike called on non-Object")
    }
    context.fn = this;
    context.fn(...args)
}
//  purchaseCar.myApply(properties1, ["$", "5000000"])
//  purchaseCar.apply(properties1,[ "$", "5000000"])

//BIND
const properties2 ={
     color: "red",
     company: "ferrari"
 }

 function purchaseCar(currency, price){
    console.log(`I have purchase ${this.color} - ${this.company} car for ${currency}${price}` );
 } 

Function.prototype.myBind = function(context= {}, ...args){
    if(typeof this !== "function"){
        throw new Error (this + "function is not callable")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}

 const newFunc = purchaseCar.myBind(properties2, "$", "5000000")
 newFunc()
 
//  purchaseCar.apply(properties1,[ "$", "5000000"])