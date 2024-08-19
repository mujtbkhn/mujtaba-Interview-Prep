//Promise.allSettled will wait for all the results to come irrespective of whether they fail or succeed and then give us the result with the statuses
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success")
        // reject("P1 Fail")
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Success")
        // reject("P2 Fail")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 Success")
        reject("P3 Fail")
    }, 2000);
})

Promise.allSettled([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })

//promise.allSettled will show all the promise results with their statuses and values irrespective of fulfillment or rejection