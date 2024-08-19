// Remove duplicates from an array.

function remove(arr) {
    const removedArray = new Set([...arr])
    //    return Array.from(removedArray)
    return [...removedArray]
}
console.log(remove([1, 2, 1, 2, 12, 4, 5, 4]))