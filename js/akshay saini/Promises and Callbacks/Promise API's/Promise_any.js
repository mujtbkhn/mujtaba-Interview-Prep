//Promise.any will return the "first settled resolved promise" and if it doesn't find any then it will return an aggregate error (list of all errors)
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P1 Success")
        reject("P1 Fail")
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 Success")
        reject("P2 Fail")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 Success")
        reject("P3 Fail")
    }, 2000);
})

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
        console.log(err.errors)
    })

