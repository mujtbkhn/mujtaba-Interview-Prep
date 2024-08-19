function rotated(arr, k) {
    let size = arr.length
    const rotated = arr.splice(size - k, size)
    arr.unshift(...rotated)
    return arr
}
console.log(rotated([1, 2, 45, 46, 7, 8, 7, 45, 7, 9], 3))