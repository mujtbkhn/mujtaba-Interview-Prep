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
//   executeTasksAsynchronously();
  executeTasksSynchronously();
  