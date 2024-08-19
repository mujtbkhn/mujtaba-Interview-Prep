
const arr1 = [1, 5, 6, 8, 7]

function remove(arr, value) {
    return arr.filter(x => x !== value)
}
console.log(remove(arr1, 6))