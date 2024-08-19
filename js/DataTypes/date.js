// let date = new Date(2022, 1, 29)
// date.setDate(date.getDate() + 2)
// console.log(date)

// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 10000000; i++) {
//     let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log(`The loop took ${end - start} ms`);

// let ms = Date.parse(new Date());

// console.log(ms);
// console.log(new Date(ms))

// let date = new Date().toISOString().split('T')[0]
let date = new Date()
console.log(date)
// console.log(date)

let day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

console.log(day[date.getDay()])
console.log(date.getDate())
console.log(months[date.getMonth()])
console.log(date.getFullYear())