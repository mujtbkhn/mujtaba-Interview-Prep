//aggregate data in arrays with reduce

const data = [
    { name: 'apple', quantity: 1 },
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 3 },
    { name: 'banana', quantity: 1 },
    { name: 'orange', quantity: 5 }
]

// const aggregatedData = data.reduce((acc, curr) => {
//       const existing = acc.find(item => item.name === curr.name)
//       if(existing){
//         existing.quantity += curr.quantity
//       }else{
//         acc.push({...curr})
//       }
//       return acc
// }, [])

// console.log(aggregatedData)

// let map = new Map()
// let result = []
//  data.forEach(item => {
//     if(!map.has(item.name)){
//         map.set(item.name, true)
//         result.push(item)
//     }
// })
// console.log(result)