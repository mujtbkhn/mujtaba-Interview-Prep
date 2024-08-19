function find(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return { "max: ": max, "min: ": min }
}
console.log(find([1, 5, 4, 7, 89, 5, 42, 5]))