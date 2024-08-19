//Promise.race returns the first settled promise whether fulfilled or rejected , it returns the first promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success")
        // reject("P1 Fail")
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
        resolve("P3 Success")
        // reject("P3 Fail") 
    }, 2000);
})

Promise.race([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })



const result_promise = Promise.race([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((res) => console.error(res))

console.log(result_promise)