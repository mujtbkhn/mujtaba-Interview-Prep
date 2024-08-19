//in order to tackle the drawbacks of callbacks, promise is introduced
/* what is Promise? 
A Promise is an object representing the eventual completion or failure of an asynchronous operation */

//promises are used to tackle the callback problem of inversion of control and callback hell, as promises resolve the promise only once meaning it will either be resolved or rejected and in the next step we can do whatever we want with the result unlike in callback where we were blindly trusting the callback to execute the next function  

// As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.

const cart = ['iphone', 'macbook', 'mercedes']

api.createOrder(cart, function () {

    api.payment(function () {

        api.summary(function () {

            api.updateWallet(function () {

            })

        })

    })

})

//here we are using callbacks which does the work but is inefficient, we can write the same code with promises like
const promise =
    createOrder(cart)
        .then(function payment(orderId) {
            console.log(payment);
        }).then(function summary(orderId) {
            console.log(summary);
        }).then(function updateWallet(orderId) {
            console.log(updateWallet);
        })

//Promise will return an object with some data values that will have promiseState and promiseResult 
//promise is an asynchronous way of writing so it will do the required tasks in some time later

//Common example of promises is 'fetch'-> it is an window object, web api that will have a promise

//A promise has three states
// 1.Pending
// 2.fulfilled
// 3.Rejected

//Promise Chaining
//the passing of callback values various times which in callback resulted in callback hell but in promise is much more efficient and readable is promise chaining, chaining is done using the '.then()' keyword heres an example:

// Simulate an asynchronous operation that resolves after 2 seconds
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async operation completed with value: ${value}`);
            resolve(value);
        }, 2000);
    });
}

// Chain promises
asyncOperation(1)
    .then((result) => {
        // First .then()
        console.log(`First .then() with result: ${result}`);
        return result + 1;
    })
    .then((result) => {
        // Second .then()
        console.log(`Second .then() with result: ${result}`);
        return result * 2;
    })
    .then((result) => {
        // Third .then()
        console.log(`Third .then() with result: ${result}`);
    })
    .catch((error) => {
        console.error(`An error occurred: ${error}`);
    });

//Summary:
/*1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then() */