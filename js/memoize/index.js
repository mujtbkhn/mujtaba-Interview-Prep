
function memoize (fn) {
    let cache = {}
    return function (...args){
        const argsToString = JSON.stringify(args)
        if( argsToString in cache){
            console.log('from cache')
            return cache[argsToString]
        }else{
            console.log('computing values')
            const result = fn.apply(this,args)
            cache[argsToString] = result
            return result
        }
    }
}

const expensiveFunc = (x1, x2) => {
    let result =0
    for(let i=0; i<1000000; i++){
          result = x1 * x2
    }
    return result
}

const memoized = memoize(expensiveFunc)

console.time("first time")
console.log((1014, 1025))
console.timeEnd("first time")

console.time("second time")
console.log(memoized(1014, 1025))
console.timeEnd("second time")

