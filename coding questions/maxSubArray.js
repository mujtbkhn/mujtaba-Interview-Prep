function maxSubArray(arr) {
    let maxSum = arr[0]
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0
        for (let j = i; j < arr.length; j++) {
            currentSum = currentSum + arr[j]
            if (currentSum > maxSum) {
                maxSum = currentSum
                start = i;
                end = j;
            }
        }
    }
    return { maxSum, maxArray: arr.slice(start, end + 1) }
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))