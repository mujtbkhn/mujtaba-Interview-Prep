
//1
var promise1 = new Promise((resolve, reject) => {
    // console.log(1)
    resolve('success')
})

promise1.then((val) => {
    // console.log(2)
    // console.log(val)
}
)
// console.log(3)

//2
var promise2 = new Promise((resolve, reject) => {
    // console.log(1)

})
promise2.then(() => console.log(2))
// console.log(3)

//3
var promise3 = new Promise((resolve, reject) => {
    // console.log(1)
    // resolve('resolve1')
})
const promise3_1 = promise3.then(val => console.log(val))
// console.log("promise 3:", promise3)
// console.log("promise 3_1:", promise3_1)

//4
const fn = () => (
    new Promise((resolve, reject) => {
        // console.log(1)
        // resolve('success')
    })
)
fn().then(val => console.log(val))
// console.log(2)

//5
// console.log('start')
setTimeout(() => {
    //    console.log('setTimeout')   
}, 0);
Promise.resolve().then(() => {
    // console.log('resolve')
})
// console.log('end')
// console.log('end')
// console.log('end')
// console.log('end')
// console.log('end')
// console.log('end')

//6
var promise5 = new Promise((resolve, reject) => {
    // console.log(1)

    setTimeout(() => {
        // console.log('Timer Start')
        resolve('resolve')
        // console.log('Timer End')
    }, 0)
    // console.log(2)
})
// promise5.then(val => console.log(val))
// console.log(4)

//7
var timer1 = setTimeout(() => {
    // console.log("timer 1")
    const timer3 = setTimeout(() => {
        // console.log("timer 3")
    }, 0);
}, 0);

var timer2 = setTimeout(() => {
    // console.log("timer 2")
    setTimeout(() => {
        // console.log("timer 4")
    }, 0);
}, 0);
// console.log("start")

//8
var timer1 = setTimeout(() => {
    // console.log("timer 1")
    const promise1 = Promise.resolve().then(() => {
        // console.log("promise1")
    })
}, 0);

var timer2 = setTimeout(() => {
    // console.log("timer 2")
}, 0);
// console.log("start")

//9
var promise1 = Promise.resolve().then(() => {
    // console.log("Promise 1")
    const timer2 = setTimeout(() => {
        // console.log("timer 2")
    }, 0);
})

var timer1 = setTimeout(() => {
    // console.log("timer 1")
    const promise2 = Promise.resolve().then(() => {
        // console.log("Promise 2")
    })
}, 0);
// console.log("start")

//10
var promise1 = new Promise((resolve, reject) => {
    var timer1 = setTimeout(() => {
        resolve('success')
    }, 1000);
})
var promise2 = promise1.then(() => {
    // throw new Error('error!!!')
})
// console.log('promise1', promise1)
// console.log('promise2', promise2)

var timer2 = setTimeout(() => {
    // console.log('promise1', promise1)
    // console.log('promise2', promise2)
}, 2000);