// this module gives us the ability to generate new processes. This module is designed to work with long-term tasks and interact with the operating system.

// The child_process module contains the following main methods that will help us create, manipulate, and run processes: exec, spawn, and fork.

const cp = require('child_process')

cp.exec("start chrome https://chatgpt.com/?oai-dm=1")

//opens chrome and then chatgpt


//different question from child process
//what are globals in nodejs?
//globals is an object in nodejs with all the global variables and functions
// console.log(global)