const arr1 = [1, 5, 6, 8, 7]
const arr2 = [5, 2, 3, 8, 9]

// const set2 = new Set(arr2)
// console.log(arr1.filter(x => set2.has(x)))
// console.log(arr1.filter(x => arr2.includes(x)))



// function intersection(arr1, arr2){
//       let set = new Set(arr2)
//       return arr1.filter(item => set.has(item))
// }
// console.log(intersection(arr1, arr2))

// function intersection(arr1, arr2){
//     return arr1.filter(item => arr2.includes(item))
// }
// console.log(intersection(arr1,arr2))

// function intersection(arr1, arr2){
//       return arr1.reduce((acc, item) => {
//              if(arr2.includes(item)){
//                 acc.push(item)
//              }

//              return acc
//       }, [])
// }
// console.log(intersection(arr1, arr2))