// 1. Reverse a String
function reverse(str) {
    // return str.split('').reverse().join('')
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
// console.log(reverse("hello mujju"))

// 1.1 reverse string without loop or predefined function(like reverse)
function reverseWithoutInbuilt(str) {
    if (str === "") {
        return str;
    }
    return reverseWithoutInbuilt(str.substring(1)) + str.charAt(0);
}
// console.log(reverseWithoutInbuilt("Mujtaba"))

// 2. Check for Palindrome
function Palindrome(str) {
    return str === str.toString().split('').reverse().join('')
}
// console.log(Palindrome("racecar"))

// 3. Find the Largest Number in an Array
function findLargest(arr) {
    // return Math.max(...arr)

    let sortedAndUnique = [...new Set(arr.sort((a, b) => b - a))]
    return sortedAndUnique.at(0)

}
// console.log(findLargest([3, 5, 4, 5, 7, 2, 4, 3, 7, 2, 8]))

// 4. FizzBuzz
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else console.log(i)
    }
}
// console.log(fizzbuzz())

// 5. Remove Duplicates from an Array
function removeDup(arr) {

    // return [...new Set([...arr])]
    return arr.filter((item, i) => arr.indexOf(item) === i)
}
// console.log(removeDup([1, 2, 4, 5, 7, 8, 9, 5, 7, 4, 8, 9]))

// 6. Sum of Array Elements
function sumArr(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
}
// console.log(sumArr([1, 2, 4, 5, 4, 7, 8, 92, 4]))

// 7. Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}
// console.log(factorial(5))

// 8. Merge Two Sorted Arrays
function merge(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
    // let newArr = arr1.concat(arr2)
    // return newArr.filter((item, i) => newArr.indexOf(item) === i).sort((a, b) => a - b)
}
// console.log(merge([1, 2, 6, 8], [4, 5, 6, 8, 9]))

// 9. Count the Number of Vowels in a String
function countVowels(str) {
    const vowels = 'aeiou'
    str = str.toLowerCase()

    let count = 0
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
// console.log(countVowels('"helluuuo worldaaaa"'))

// 10. Anagram
function anagram(s, t) {
    const mutate = str => str.split('').sort().join('')

    return mutate(s) === mutate(t)
}
// console.log(anagram('anagram', 'nagaram'))

// 11. fibonacci

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(15))

// 12. non repeating
function nonRepeating(str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1)
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return str[i]
        }
    }
    return -1
}
// console.log(nonRepeating("aabbccccdeeeffghidgh"))

// 13. Intersection

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item))
}

// console.log(intersection([1, 2, 4, 5, 7], [5, 4, 8, 7, 5, 1]))

//14. Check if a string contains only unique characters:
function findUnique(str) {
    let set = new Set()
    for (let char of str) {
        if (set.has(char)) {
            return false
        } else {
            set.add(char)
        }
    }
    return true
}
// console.log(findUnique('Mujtbkhn'))

// 15. prime number
function findPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
// console.log(findPrime(27))

// 15.1 write a program that generates 50 prime number

function fiftyPrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 50) {
        if (isPrime(num)) {
            primes.push(num)
        }
        num++
    }
    return primes;
}
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}
// console.log(fiftyPrimes(50))

// 16. rotated
function rotated(arr, k) {
    let size = arr.length
    let rotatedArr = arr.splice(size - k, size)
    arr.unshift(...rotatedArr)
    return arr
}
// console.log(rotated([1, 2, 4, 5, 7, 9, 6, 4], 5))

function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
}

// Example usage:
// console.log(areRotations("waterbottle", "erbottlewat")); // Output: true
// console.log(areRotations("hello", "olleh")); // Output: false