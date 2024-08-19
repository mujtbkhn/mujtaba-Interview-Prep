
const arr1 = [1, 5, 6, 8, 7]
const arr2 = [5, 2, 3, 8, 9]

const new1 = arr1.filter(x => !arr2.includes(x))
const new2 = arr2.filter(y => !arr1.includes(y))

// console.log(new1.concat(new2))
console.log([...new1, ...new2])