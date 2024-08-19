
const arr1 = [1, 5, 6, 8, 7]
const arr2 = [5, 2, 3, 8, 9]

// console.log(...new Set([...arr1, ...arr2]))

// const union = arr1.concat(arr2).reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr)
//     }
//     return acc
// }, [])
// // console.log(union)

// const union1 = []
// const seen = {}

// arr1.concat(arr2).forEach(item => {
//     if (!seen[item]) {
//         seen[item] = true
//         union1.push(item)
//     }
//     return union1
// })

// console.log(union1)


// function union(arr1, arr2) {

//     return [...new Set(arr1.concat(arr2))]
// }
// console.log(union(arr1, arr2))

function union(arr1, arr2){

    let seen={}
    let result = []
    arr1.concat(arr2).forEach(item => {
        if(!seen[item]){
            result.push(item)
        }
    })
    return [...new Set(result)]
}
console.log(union(arr1,arr2))