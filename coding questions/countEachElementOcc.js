//Count the number of occurrences of each element in an array

function countEachElementOcc(arr) {
    const counts = {} //map for key value pair
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        if (counts[current]) { //if we found the same element again 
            counts[current]++ //then increment
        } else {
            counts[current] = 1 //or if first time then initialize with 1
        }
    }
    console.log(counts)
}
// countEachElementOcc(['a', 'b', 'a', 'c', 'd', 'b', 'a'])
countEachElementOcc([1, 2, 3, 4, 56, 1, 23, 5, 6, 5, 2, 3, 14, 5, 6])