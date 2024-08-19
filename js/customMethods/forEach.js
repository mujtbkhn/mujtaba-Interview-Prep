Array.prototype.customForEach = function (cb) {

    if (typeof cb !== "function") {
        throw new Error("not a function")
    }

    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}
let myArr = [1, 2, 45, 47, 6, 2]
myArr.customForEach((item) => console.log(item))

// String.prototype.newMethod = "1"
// let str = ""
// console.log(str.newMethod)

