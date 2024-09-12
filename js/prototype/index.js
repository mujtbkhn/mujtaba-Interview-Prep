//what do you get as end value when you traverse through any object (prototype chain)

function logPrototypeChain(obj){
    let current = obj;
    while(current){
        console.log(current);
        current = Object.getPrototypeOf(current)
        if(current === null){
            console.log('null')
        }
    }
}
logPrototypeChain({a: 1, b:2, c:5})