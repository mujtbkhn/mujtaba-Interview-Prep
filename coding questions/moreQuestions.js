// Find the difference of two arrays:
function findDiff(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}
// console.log(findDiff([1, 2, 3, 5], [2, 8, 9, 4]))

// Find the symmetric difference of two arrays:
function findSymDiff(arr1, arr2) {
    let diff1 = arr1.filter((item) => !arr2.includes(item))
    let diff2 = arr2.filter((item) => !arr1.includes(item))
    return diff1.concat(diff2)
}
// console.log(findSymDiff([1, 2, 3, 5], [2, 8, 9, 4]))

// Merge two sorted arrays into one sorted array:
function merge(arr1, arr2) {
    const sortedArr = Array.from(new Set([...arr1, ...arr2]))
    return sortedArr.sort((a, b) => b - a)
}
// console.log(merge([1, 2, 3, 5], [2, 8, 9, 4]))

// Check if a string contains only unique characters:
function unique(str) {
    const set = new Set();
    for (let char of str) {
        if (set.has(char)) {
            return false
        } else {
            set.add(char)
        }
    }
    return true
}
// console.log(unique("tushaar"))

/*Key differences:
What they iterate over: for...of iterates over values, while for...in iterates over property keys.
Use cases: Use for...of for iterating over array-like structures and collections. Use for...in for iterating over object properties. */

//remove duplicates from an array
function removeDuplicates(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(removeDuplicates([1, 2, 131, 4, 6, 78, 2]))