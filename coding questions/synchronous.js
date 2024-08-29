function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    if (callback) callback();
  }, 3000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    if (callback) callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    if (callback) callback();
  }, 2000);
}

function executeTasksAsynchronously() {
  task1();
  task2();
  task3();
}

function executeTasksSynchronously() {
  task1(() => {
    task2(() => {
      task3();
    });
  });
}

// Run the functions to see the results
// executeTasksAsynchronously();
// executeTasksSynchronously();

//make synchronous without causing a callback hell

//Promises
function syncWithoutHell(cb, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb())
    }, ms);
  })
}

let c1 = () => console.log("first")
let c2 = () => console.log("second")
let c3 = () => console.log("third")

// syncWithoutHell(c1, 3000)
//   .then(() => syncWithoutHell(c2, 2000))
//   .then(() => syncWithoutHell(c3, 5000))


//Async await
const delay = async (cb, d) => {
  return new Promise((resolve) => {

    setTimeout(() => {
      cb()
      resolve()
    }, d);
  })
}

// (async function sequentially() {

//   await delay(c1, 2000);
//   await delay(c2, 3000);
//   await delay(c3, 1500);
// })()