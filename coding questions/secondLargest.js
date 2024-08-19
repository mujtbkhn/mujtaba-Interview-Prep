function secondLargest(arr) {
    const sortedAndUnique = Array.from(new Set(arr)).sort((a, b) => b - a)
    return sortedAndUnique.at(1)
}
console.log(secondLargest([1, 41, 5, 2, 71, 1, 5, 6, 62, 5]))