var majorityElement = function (nums) {
    let count = {}
    let size = Math.ceil(nums.length / 2)
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1
        if (count[num] === size) {
            return num
        }
    }

};