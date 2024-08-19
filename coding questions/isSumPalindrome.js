function isSum(n) {
    let numbers = n.toString()
    let sum = 0;
    let reverseSum = '';
    for (let i = 0; i < numbers.length; i++) {

        sum += parseInt(numbers[i], 10)


    }
    reverseSum = parseInt(sum.toString().split('').reverse().join(''))
    console.log(sum === reverseSum)
    // console.log(sum);
    // console.log(reverseSum);

}
isSum(51241)