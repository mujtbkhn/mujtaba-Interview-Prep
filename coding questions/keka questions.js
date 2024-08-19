//2. Write a JavaScript program to find the maximum number in an array. 

function max(arr) {
    return Math.max(...arr)
}
// console.log(max([5, 8, 9, 7, 65, 21]))

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function palindrome(str) {
    return str === str.split('').reverse().join('')
}
// console.log(palindrome("moon"))

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
function evenNumbers(arr) {
    return arr.filter(a => a % 2 === 0)
}
// console.log(evenNumbers([1, 2, 45, 7, 8932, 45]))

// 6. Write a JavaScript program to calculate the factorial of a given number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {

        return n * factorial(n - 1)
    }
}
// console.log(factorial(5))

// 7. Write a JavaScript function to check if a given number is prime. 

function prime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        } else {
            return true
        }
    }
}
// console.log(prime(17))

// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 
function sortedBasedonKeys(arr, key) {

    return arr.sort((a, b) => a[key] - b[key])
}
const arr = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];

const sortedByAge = sortedBasedonKeys(arr, 'age');
// console.log(sortedByAge);

// 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function mergeSortedArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}
console.log(mergeSortedArray([1, 2, 4, 5], [4, 9, 61, 98]))