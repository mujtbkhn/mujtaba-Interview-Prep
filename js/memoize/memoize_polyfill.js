const memoize = (fn) => {
    const cache = {}
    return function (...args) {
        const argsToString = JSON.stringify(args) //to make the cache object have only one type for ease
        if (argsToString in cache) {
            console.log(`fetching from cache for args ${argsToString}`)
            // console.log("cache : ", cache)
            return cache[argsToString]
        } else {
            console.log(`computing values for args ${argsToString}`)
            const result = fn.apply(this, args)
            cache[argsToString] = result
            return result
        }
    }
}

const clumsyProduct = (x1, x2) => {
    for (let i = 0; i < 1000000; i++) {
        return x1 * x2
    }
}

// const factorial = memoize((x) => {
//     if (x === 0) {
//         return 1
//     } else {
//         return x * factorial(x - 1)
//     }
// })

const memoizedClumsyProduct = memoize(clumsyProduct)

console.time("first time")
console.log(memoizedClumsyProduct(1457, 8475))
console.timeEnd("first time")

console.time("second time")
console.log(memoizedClumsyProduct(1457, 8475))
console.timeEnd("second time")

// console.log(factorial(5))
// console.log(factorial(6))