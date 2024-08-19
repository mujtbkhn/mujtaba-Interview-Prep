//A Promise is an object representing the eventual completion or failure of an asynchronous operation 

//callback functions
function asyncFunction1(callback) {
    setTimeout(() => {
        console.log("Async Function 1 Done");
        callback();
    }, 1000);
}

function asyncFunction2(callback) {
    setTimeout(() => {
        console.log("Async Function 2 Done");
        callback();
    }, 1000);
}

function asyncFunction3(callback) {
    setTimeout(() => {
        console.log("Async Function 3 Done");
        callback();
    }, 1000);
}

asyncFunction1(() => {
    asyncFunction2(() => {
        asyncFunction3(() => {
            console.log("all async functions done!")
        })
    })
})
//however this is forming a callback hell and as you can see a pyramid of doom has been formed here so in order to tackle this promises come to the rescue

//WITH PROMISES

function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("async promise done")
            resolve()
        }, 1000);
    })
}
asyncFunction().then(() => {
    console.log("Async operation performed.");
})

//we can use the .then() keyword to add callbacks to our promise chain

//promise objects return two things
//   1. Promise State 
//   2. Promise Response

// 1. Promise State
//there are three promise states 1. pending 2. fulfilled 3. rejected
// 1.pending as the name suggests shows us that the state is pending ie we havn't got the data in it
// 2.fulfilled shows that the data is being there in the object 
// 3.rejected meaning that the operation has failed 

const GITHUB_API = "https://api.github.com/users/mujtbkhn"
const user = fetch(GITHUB_API)

console.log(user)
//this will print state as pending but the object inside will print state as fulfilled this is just an inconsistency in chrome browser 

// PROMISES ARE IMMUTABLE IE NO ONE CAN CHANGE THE DATA ONCE IT IS FULFILLED WE CAN PASS IT ANYWHERE AND NEED NOT HAVE TO WORRY FOR SOMEONE TO CHANGE IT

//PROMISE CHAINING:
//we can attach all the callbacks in promises using chaining method where in all the functions are dependent on the completion of the functions above them we can use the .then() keyword


function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("async function 1 done")
            resolve()
        }, 1000);
    })
}
function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("async function 2 done")
            resolve()
        }, 1000);
    })
}
function asyncFunction3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("async function 3 done")
            resolve()
        }, 1000);
    })
}
asyncFunction1()
    .then(() => asyncFunction2())
    .then(() => asyncFunction3())
    .then(() => {
        console.log("All Async Functions Completed");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

//Promise chaining made our code look so much more readable and avoided the callback hell


//summary :
/*
because of callback we were facing problems like callback hell and inversion of control where we were not in control of our code , after the introduction of promises we resolved this issue as promises tackle problems of inversion of control with resolve and reject, the code will move forward if it is resolved and promises guarantee us that the promises cannot be changed once fulfilled and promises handle callbacks with the .then() keyword , promises have 3 states pending fulfilled and rejected and move the object according to state 
promises really helped us tackle major problems 
*/