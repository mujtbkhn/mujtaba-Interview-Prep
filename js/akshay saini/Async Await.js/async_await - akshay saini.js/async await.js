//async functions make the js asynchronous in nature

//async always returns a promise  

// const p = new Promise(function (resolve, reject){
//     resolve("promise resolved")
// })

// async function demo() {
//     return "Demo"
// return p; // as we calling a promise inside an async function it will return the promise and not be wrapped in a promise unlike in common async
// }

// const getDemoPromise = demo()
// console.log(getDemoPromise); //this returned a promise

// getDemoPromise.then(res => console.log(res))
// p.then(res => console.log(res))

//async await is used to handle promises, but do we even need them? yes heres why

//Promises handled with promise
// const p = new Promise(function (resolve, reject) {
//     resolve("promise resolved")
// })

// p.then(res => console.log(res))

//Promises handled using async await

// async function handlePromise(){
//      const val = await p;  //instead of .then() we can do the same using await
//        console.log(val);
//   }
// handlePromise()

//DIVING DEEP into async await 
//difference in promises vs async await
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("promise resolved 1 ")
    }, 10000);
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("promise resolved 2 ")
    }, 6000);
})

// function getData(){
//     p1.then(res => console.log(res))
//     console.log("namaste javascript using promises"); //here in promises even the .then method is not waiting for the promise to get resolved and be shown after it but it just directly outputs the .then() and after that promise is resolved after its timeout is over
// }
// getData()

//using async await
// {
//    const val = await p1;
//     console.log("namaste javascript using async await"); //and here in async await the promise will wait till the promise is resolved, and thats why it is more preferable than promise because of its use case 
//     console.log(val)

// }
// getData()


//interview prep 
// async function getData(){
// //    console.log("will this wait?");

//    const val = await p1;
//     console.log("namaste javascript using async await"); //and here in async await the promise will wait till the promise is resolved, and thats why it is more preferable than promise because of its use case 
//     console.log(val)

//    const val2 = await p1;
//     console.log("namaste javascript using async await 2");  
//     console.log(val2)
//     //what will happen here will the two functions work after the resolving one and then another or will they get resolved together?
// }
// getData()

// async function getData(){
//    //what will happen here? will the output be printed after 10sec for both or will the 7sec printed first and then the 10sec

//    const val = await p1;
//     console.log("namaste javascript using async await"); //and here in async await the promise will wait till the promise is resolved, and thats why it is more preferable than promise because of its use case 
//     console.log(val)

//    const val2 = await p2;
//     console.log("namaste javascript using async await 2");  
//     console.log(val2)
//     //what will happen here will the two functions work after the resolving one and then another or will they get resolved together?
// }
// getData()

// async function getData(){
//    //what will happen here? will the output be printed after 10sec for both or will the 7sec printed first and then the 10sec

//    const val = await p2;
//     console.log("namaste javascript using async await"); //and here in async await the promise will wait till the promise is resolved, and thats why it is more preferable than promise because of its use case 
//     console.log(val)

//    const val2 = await p1;
//     console.log("namaste javascript using async await 2");  
//     console.log(val2)
//     //what will happen here will the two functions work after the resolving one and then another or will they get resolved together?
// }
// getData()

//FETCH - EXAMPLE
/* fetch takes a request as an argument and returns a promise that resolves the response to that request */

// const API_URL = "https://api.github.com/users/mujtbkhn"

// async function handleFetch(){
//     const data = await fetch(API_URL);

//     const jsonValue = await data.json()

//     console.log(jsonValue);
// }
// handleFetch()

//ERROR HANDLING - using try catch block

const API_URL = "https://api.github.com/users/mujtbkhn"

async function handleFetch() {
    try {

        const data = await fetch(API_URL);

        const jsonValue = await data.json()

        // console.log(jsonValue);
    }

    catch (error) {
        // console.log(error.message)
    }
}
handleFetch()