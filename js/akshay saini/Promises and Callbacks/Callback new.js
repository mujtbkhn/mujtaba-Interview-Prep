//A callback is an asynchronous javascript function method which returns a function that can be executed at a later time, callbacks make it possible to write nested functions 
// a better answer: 
// A callback in JavaScript is simply a function that is passed as an argument to another function and is executed at a later time or when a specific condition is met. Callbacks are essential for handling asynchronous operations, such as fetching data from a server, reading a file, or waiting for a timer to expire.

// ex: 
function mujju(name) {
    console.log(`Hello ${name}`)
}

function sayName(callback) {
    callback('John Doe')
}
sayName(mujju) // in this function we are passing mujju function in sayName function as an argument that is executed at a later time this is known as callback

//Problems with Callback 
//suppose we have a big codebase of nested callbacks 

const WarPositions = () => {
    console.log("start the positioning!");
    setTimeout(() => {
        console.log(
            `commmanders at front`
        );

        setTimeout(() => {
            console.log(
                `Generals are ready to serve!`
            );

            setTimeout(() => {
                console.log(
                    `let the Infants be ready to die `
                );
                setTimeout(() => {
                    console.log(
                        `let the Infants be ready to die and make the nation proud`
                    );
                    setTimeout(() => {
                        console.log(`I am ready too, said General and as you can the code looks messy`);
                    }, 2000);
                }, 3000);
            }, 2000);
        }, 2000);
    }, 1000);
};

WarPositions()

//in this codebase the readability becomes less readable and the code looks messy and also the code is growing horizontally and not vertically

//the two main problems we are facing here are 
//1. CALLBACK HELL
//2. INVERSION OF CONTROL


// 1. CALLBACK HELL
//  it is callbacks written inside callbacks written inside callbacks and so on , this makes our codebase look very unreadable and unmaintainable 

// 2. INVERSION OF CONTROL
//  here in the callback hell we are blindly trusting the callback functions to execute the nested callbacks on their own and here lies the inversion of control where we are not controlling the callback but the callback is controlling us this can be daunting in scenarious where we want the functions to be executed one after another only

const cart = ['iphone', 'macbook', 'mercedes']

api.createOrder(cart, function () {

    api.payment(function () {

        api.summary(function () {

            api.updateWallet(function () {

            })

        })

    })

})
// take a look at this callback functions nested here we can see the apis are dependent on the apis above them but what if the apis don't execute for whatever reason or execute them twice or thrice then we are leaving the apis below in control of them and this can get us in serious trouble 