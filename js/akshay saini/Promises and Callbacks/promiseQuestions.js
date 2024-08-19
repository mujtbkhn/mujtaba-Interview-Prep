// 1.
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve("success")
// })

// promise1.then(() => {
//     console.log(3)
// })

// console.log(4)

// 2.
// const promise2 = new Promise((resolve, reject) => {
//     console.log(1)
// })
// promise2.then(() => {
//     console.log(3)
// })
// console.log(2)

// 3.
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve("resolve1")
// })

// const promise2 = promise1.then((res) => { console.log(res) })
// console.log(promise1)
// console.log(promise2)

// 4.
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1)
//     resolve('success')
// }))

// fn().then((res)=> {
//     console.log(res)
// })

// console.log(2)

// 5.
// const promise = new Promise((resolve, reject) => {
//     console.log(1)
//     setTimeout(() => {
//         console.log('start')
//         resolve('success')
//         console.log('end')
//     }, 0);
//     console.log(2)
// })
// promise.then((res) => console.log(res))
// console.log(4)

// 6.
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     setTimeout(() => {
//         console.log('timer3')
//     }, 1000);
// }, 1000);

// const timer3 = setTimeout(() => {
//     console.log('timer2')
// }, 1000);
// console.log('start')

// 7.

// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise1 = Promise.resolve().then(() => {
//         console.log('promise 1')
//     })
// }, 0);

// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0);

// console.log('start')

// 8.
// const promise1 = Promise.resolve().then(() => {
//     console.log('promise 1')
//     const timer1 = setTimeout(() => {
//         console.log('timer1')
//     }, 0);
// })

// const timer2 = setTimeout(() => {
//     console.log('timer 2')
//     const promise2 = Promise.resolve().then(() => {
//         console.log('promise 2')
//     })
// }, 0);

// console.log('start')