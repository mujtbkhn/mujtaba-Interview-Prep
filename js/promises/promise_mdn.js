const promise = new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
            setTimeout(resolveInner, 3000)
        })
    )
})

// console.log(promise)

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    }, 3000)
})
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 300)
})

myPromise.then((val) => (val + "and bar"))
    .then((val) => (val + "and bar again"))
    .then((val) => (val + "boo"))
    .then((val) => (val + "boo again"))
// .then((val) => console.log(val))
// .catch((err) => console.log(err))

const promiseA = new Promise((resolve, reject) => {
    resolve(777)
})
// promiseA.then((val) => console.log("asynchronous logging has value", val))
// console.log("immediate logging")//will print first as the promise will print at the first asynchronous opportunity

let myNewPromise = new Promise((newResolved, newRejected) => {
    let x = 0;
    if (x === 0) {
        newResolved("ok")
    } else {
        newRejected("Error")
    }
})

// myNewPromise.then((val) => console.log(val))
//     .catch((err) => console.error(err))

function doSomething(callback) {
    setTimeout(() => {
        const result = "something"
        callback(result)
    }, 1000)
}
function doSomethingElse(result, callback) {
    setTimeout(() => {
        const newResult = result + "else"
        callback(newResult)
    }, 2000)
}
function doThirdThing(result, callback) {
    setTimeout(() => {
        const newResult = result + "third thing"
        callback(newResult)
    }, 3000)
}
function failureCallback(error) {
    console.error("error", error)
}

// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log(`got the final Result${finalResult}`)
//         }, failureCallback)
//     }, failureCallback)
// }, failureCallback)

function didSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("did something")
            resolve("https://something.com")
        }, 500);
    })
}
// didSomething()


