// DEEP CLONING ... 

// 1ST WAY

let obj1 = {
    id: "69",
    name: {
        firstName: "Abdul Rehman Mujtaba",
        lastName: "Khan"
    }
}

let obj2 = {
    ...obj1,
    id: "69",
    name: {
        ...obj1.name,  //clone the nested levels by spread operator
        firstName: "Abdul Rehman Mujtaba",
        lastName: "Khan"
    }
}

obj2.id = "11"
obj2.name.lastName = "jeelani"

// console.log(obj1)
// console.log(obj2)

// 2ND WAY

let obj3 = {
    id: "42",
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    address: {
        city: "New York",
        country: "USA"
    }
};


let obj4 = JSON.parse(JSON.stringify(obj3))  //JSON.stringify => objects to strings => JSON.parse => strings back to objects

obj4.id = "99"
obj4.name.lastName = "loe"

// console.log(obj3)
// console.log(obj4)

//3RD WAY

let obj5 = {
    id: "78",
    name: {
        firstName: "eva",
        lastName: "elfie"
    },
    address: {
        city: "cali",
        country: "UK"
    }
};


let obj6 = structuredClone(obj5)  //STRUCTURED CLONE

obj6.id = "102"
obj6.address.country = "United States Of America"

console.log(obj5)
console.log(obj6)