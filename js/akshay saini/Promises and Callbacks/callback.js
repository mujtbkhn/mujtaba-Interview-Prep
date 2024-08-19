//what are callbacks? 
//callbacks are function which are passed on to another function 

// setTimeout(function () {
//     console.log("timer");
// }, 5000)
//so here these are callback functions which are passed in another function also js a synchronous language and with the help of these of cb functions we make it asynchronous ie it doesnt wait till the func gets executed rather it stores this somewhere else and after its execution call it back thus not blocking the main thread 

// function x(y) {
//     console.log("x");
//     y()
// }
// x(function y() {
//     console.log("y");
// })

// document.getElementById("clickMe")
// .addEventListener("click", function abc(){  //callback
//     console.log("button clicked");
// })

//writing this with closures 

// function addEventListener() {
//     let count = 0;
//     document.getElementById("clickMe")
//         .addEventListener("click", function abc() {
//             console.log("button clicked", ++count);
//         })
// }
// addEventListener(); //here dom api is using count from its lexical environment, closures are pretty good for data hiding

//interview question - why to removeEventListeners and what is garbage collection?

//eventListeners are heavy meaning they take too much memory and also it doesn't free up memory even if the callStack is empty

// Callbacks are a fundamental concept in JavaScript used to manage asynchronous operations. Here are some examples of how callbacks can be used:

// 1. **Event Handlers:** Event listeners in the browser use callbacks to respond to events such as clicks, keypresses, or mouse movements.

//    ```javascript
//    element.addEventListener('click', function() {
     // Callback function executed on click event
//    });
//    ```

// 2. **Timers:** Functions like `setTimeout` and `setInterval` take callbacks to execute after a specified time interval.

//    ```javascript
//    setTimeout(function() {
     // Callback function executed after a delay
//    }, 1000);
//    ```

// 3. **Ajax Requests:** Callbacks are often used to handle responses from server requests.

//    ```javascript
//    fetch('https://api.example.com/data')
//      .then(function(response) {
//        return response.json();
//      })
//      .then(function(data) {
       // Callback function for handling data
//      });
//    ```

// 4. **File System Operations (Node.js):** In Node.js, file operations use callbacks to read and write files.

//    ```javascript
//    const fs = require('fs');
//    fs.readFile('file.txt', 'utf8', function(err, data) {
     // Callback function to handle file data or errors
//    });
//    ```

// 5. **Callback Functions for Custom Logic:** You can define your own functions that take callbacks for custom logic execution.

//    ```javascript
//    function performOperation(x, y, callback) {
//      const result = x + y;
//      callback(result);
//    }
   
//    performOperation(2, 3, function(result) {
//      console.log('Result:', result);
//    });
//    ```

// 6. **Iterators:** Many functions that iterate over arrays or lists take callbacks, like `forEach`, `map`, and `filter`.

//    ```javascript
//    const numbers = [1, 2, 3, 4, 5];
//    numbers.forEach(function(number) {
//      console.log(number);
//    });
//    ```

// Callbacks allow you to specify what should happen after an asynchronous operation completes, making JavaScript suitable for tasks that involve waiting for events, network requests, or I/O operations.

/* Drawbacks of Callbacks */

// 1. CALLBACK HELL
//though callbacks are really important , they are the reason why javascript is able to behave asynchronously but when we have a large codebase the callbacks can get really frustating, example;

//we were creating a ecom website with a cart functionality so we need to take care of these functions 
//1. create order -> 2. make payment -> 3. summary -> 4. update wallet
// we can achieve this with callback

// const cart = ['iphone', 'macbook', 'mercedes']

// api.createOrder(cart, function () {

//     api.payment(function () {

//         api.summary(function () {

//             api.updateWallet(function () {

//             })

//         })

//     })

// })
//this creates a callback hell where we can access the code but it is very bad at readibility and maintenability, also the code starts to grow horizontally not vertically, this is a very bad practice 

// Callback hell, also known as the "Pyramid of Doom," refers to the situation in JavaScript where multiple nested callback functions make the code hard to read and maintain. Here are a few examples to illustrate this concept:

// 1. Nested setTimeout:
// ```javascript
// setTimeout(function() {
//   console.log('First timeout');
//   setTimeout(function() {
//     console.log('Second timeout');
//     setTimeout(function() {
//       console.log('Third timeout');
//       setTimeout(() => {
//         console.log('Fourth timeout')
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function sleep(delay){
    const start = new Date().getTime()
    while(new Date().getTime() - start < delay){

    }
}
console.log('First timeout');
sleep(1000);

console.log('Second timeout');
sleep(1000);

console.log('Third timeout');
sleep(1000);

console.log('Fourth timeout');
// 2. AJAX requests with callbacks:
// ```javascript
// ajaxRequest1(function(response1) {
  // Process response1
//   ajaxRequest2(function(response2) {
    // Process response2
    // ajaxRequest3(function(response3) {
      // Process response3
      // ... and so on
//     });
//   });
// });
// ```

// 3. File system operations (Node.js):
// ```javascript
// fs.readFile('file1.txt', 'utf8', function(err, data1) {
  // Read file1.txt
//   fs.readFile('file2.txt', 'utf8', function(err, data2) {
    // Read file2.txt
//     fs.writeFile('output.txt', data1 + data2, function(err) {
      // Write to output.txt
      // ... and so on
    // });
//   });
// });
// ```

// 4. Event handling in a browser:
// ```javascript
// element.addEventListener('click', function() {
  // Handle click
//   element.addEventListener('mouseover', function() {
    // Handle mouseover
//     element.addEventListener('keydown', function() {
      // Handle keydown
      // ... and so on
//     });
//   });
// });
// ```

// Callback hell can be mitigated using techniques like Promises, async/await, and libraries like async.js (for Node.js). These methods make asynchronous code more readable and maintainable.


// 2. INVERSION OF CONTROL

//we are blindly trusting our callback functions to execute other cb functions which is too risky 