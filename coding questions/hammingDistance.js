function hammingDistance(x, y) {
    x = Array.from(x)
    y = Array.from(y)
    return x.filter(item => !y.includes(item)).length
}
console.log(hammingDistance("hello", "hrllw"))