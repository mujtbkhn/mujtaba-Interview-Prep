//Flatten a nested array 

function flattenArray(arr) {
    let flatArray = []
    function flattenHelper(arr) {
        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i])) {
                flattenHelper(arr[i])
            } else {
                flatArray.push(arr[i])
            }
        }
    }
    flattenHelper(arr)
    console.log(flatArray)
    return flatArray
}

flattenArray([1, [[[[[[[[2, 3]]]]]]]], [4, [[[[[[5, 6]]]]]]]])