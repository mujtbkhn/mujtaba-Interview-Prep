Array.prototype.customFilter = function (cb) {
    if (typeof cb !== "function") {
        throw new Error("not a function")
    }

    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp
}
let arr = [1, 2, 4, 5, 67, 8]
const evenArr = arr.customFilter((i) => { return i % 2 === 0 })
console.log(evenArr)