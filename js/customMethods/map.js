Array.prototype.customMap = function (cb) {
    if (typeof cb !== "function") {
        throw new Error("not a function")
    }

    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

let myArr = [1, 2, 4, 5, 62, 1]
myArr.customMap((i) => {
    console.log(i * 2)
})