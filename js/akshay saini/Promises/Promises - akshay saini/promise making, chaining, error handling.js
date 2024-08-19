const lobby = ['biryani', 'tahari', 'gosh-mande'];

createOrder(lobby)
.then(function (lobbyId) {
    console.log(lobbyId)
}).then(function(lobbyId){
    return makePayment(lobbyId)
}).then(function(updateWallet){
    console.log("wallet Update");
    return updateWallet
}).catch(function(err){
    console.log(err.message);
}).then(function (lobbyId) {
    console.log("this will be printed no matter what because .catch() is written above this")
})

//Promise Hell
/* if you do not provide return keyword to your promise chaining it will get similar to callback hell and the code will be unreadable so always have a return keyword */

//creation of a simple promise 
function createOrder(lobby) {
    const newPr = new Promise(function (resolve, reject) {  //this function is a callback function
        if (lobby.length > 1) {
            const lobbyId = 12487;
            setTimeout(function () {
                    resolve(lobbyId)
                }, 5000); //this will create a pending a promise state for 5 seconds after that the promise state will be fulfilled 
                // resolve(lobbyId) //and here it will fulfilled from the start as it doesn't have to wait 
            }
        else {
            const err = new Error("Rejected")
            reject(err)
        }
    })
    return newPr;
}

function makePayment(lobbyId){

   return new Promise(function(resolve, reject){
       resolve(lobbyId)
       console.log("done successfully");
   }) 
}

// 1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument. 
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.