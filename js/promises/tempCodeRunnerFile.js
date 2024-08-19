const promise = new Promise((resolveOuter) => {
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 3000)
//         })
//     )
// })

// // console.log(promise)

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved")
//     }, 3000)
// })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })