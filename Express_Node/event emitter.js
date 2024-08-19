// If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

// On the backend side, Node.js offers us the option to build a similar system using the events module.

// This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

const events = require('events')

const eventEmitter = new events.EventEmitter()

eventEmitter.on("received", () => {  // used to add a callback function that is executed when the event is triggered
    console.log("event received successfully")
})
eventEmitter.on("received", () => {  // used to add a callback function that is executed when the event is triggered
    console.log("event received successfully 1")
})


eventEmitter.on("new function ", handleNew)
function handleNew() {
    console.log("new event received")
}


console.log(eventEmitter.listeners("received"))

eventEmitter.emit("received") //emits ie trigger an event

eventEmitter.on("pizza orders", (size, toppings) => {
    console.log(`pizza is being order of size ${size} and toppings of ${toppings}`)
})
eventEmitter.emit("pizza orders", "large", "cheese")
