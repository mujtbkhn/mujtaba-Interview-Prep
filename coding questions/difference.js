function diff(arr1, arr2){

    
    // console.log(arr1.filter(x => !arr2.includes(x)))
    
    
    let diff1 = arr1.filter(x => !arr2.includes(x))
    let diff2 = arr2.filter(x => !arr1.includes(x))
    
    return [...new Set(diff1.concat(diff2))]
}
const arr1 = [1, 5, 6, 8, 7]
const arr2 = [5, 2, 3, 8, 9]

console.log(diff(arr1, arr2))