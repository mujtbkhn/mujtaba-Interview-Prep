
function chunk(arr, size) {

    const result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}
console.log(chunk([1, 2, 4, 8, 5, 6, 9], 6))

