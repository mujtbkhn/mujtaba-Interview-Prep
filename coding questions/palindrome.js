function palindrome(num) {

    return num === +num.toString().split('').reverse().join('')
}
console.log(palindrome(121))