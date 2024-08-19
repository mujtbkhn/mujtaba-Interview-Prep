// "use strict"

// THIS keyword

// console.log(this) // Points to the global object (window in browsers) when not in strict mode, otherwise undefined in strict mode.

// Inside a function
function x() {
    console.log(this)
}
x() 
// In non-strict mode, if the value of `this` is undefined or null, it will default to the global object (window). (this is called "this substitution")
// In strict mode, `this` remains undefined.
// "use strict" ensures `this` inside a function is undefined, whereas non-strict mode defaults it to the global object.
// If you want `this` to point to the global object in strict mode, call the function with `window.function()`.

// window.x() // This call ensures `this` points to the global object (window) inside the function.

const obj = {
    a: 10,
    x: function () { // This is a method, not just a function.
        // console.log(this) // `this` points to `obj` in this case.
    }
}
obj.x()

// Arrow functions: `this` behaves differently in arrow functions. It is lexically scoped to the enclosing context.

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            // console.log(this) // `this` is lexically scoped to the surrounding context, which is the `x` method. Thus, `this` points to `obj2`.
        }
        y()
    }
}
obj2.x()
