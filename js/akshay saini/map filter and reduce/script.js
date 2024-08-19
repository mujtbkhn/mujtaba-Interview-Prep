const users = [
    { firstName: "Akshay", lastName: "Saini", age: 26 },
    { firstName: "Donald", lastName: "Trump", age: 75 },
    { firstName: "Elon", lastName: "Must", age: 50 },
    { firstName: "Deepika", lastName: "Padukone", age: 26 }
];

// const output = users.map((item) => {
//     return item.firstName + " " + item.lastName
// })


const output = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})
// console.log(output)

const result = users.filter((item) => {
    if (item.age > 30) {
        return item.firstName
    }
})
// console.log(result)

const result1 = users.filter(x => x.age < 30).map((item) => item.firstName)
// console.log(result1)

const usingReduce = users.reduce((item, curr) => {
    if (curr.age < 30) {
        item.push(curr.firstName)
    }
    return item
}, [])
console.log(usingReduce)