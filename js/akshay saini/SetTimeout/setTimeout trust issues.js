console.log("start")

setTimeout(function cb() {
    console.log("callback")
}, 5000);

console.log("end")

let startDate = new Date().getTime()
let endDate = startDate

while (endDate < startDate + 10000) {  //this blocks the main thread
    endDate = new Date().getTime()
}

console.log("while expires")

//in this code although cb has a setTimeout of 5 seconds but it will only work after the while loop has been finished which is of 10 seconds time due to setTimeout being an async function which waits in the callback queue so cb will be printed after while loop expires and this is the trust issue we have with setTimeout

// console.log("start")

// setTimeout(() => {
//     console.log("callback")
// }, 0);

// console.log("end")

//even though we had a setTimeout for 0 seconds it will still be executed lastly because of its asynchronous nature js waits for none and thus it firstly pushed settimeout in a callback queue execute the end and then come back to it 