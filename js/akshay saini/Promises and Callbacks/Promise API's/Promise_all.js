//Promise.all resolves the array of promises and return the result however if any promise fails then promise.all will return with error from that promise itself
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
        reject("P3 Fail") //will return with p3 fail after 2 seconds
    }, 2000);
})

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })





const x1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("x1 success")
    }, 1000);
})

const x2 = new Promise((reject) => {
    let msg = "x2 fail"
    setTimeout(() => {
        reject(msg)
    }, 2000);
})

const x3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("x3 resolved")
    }, 3000);
})
x3.then((res) => console.log(res))

let promises = Promise.allSettled([x1, x2, x3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  console.log(promises)