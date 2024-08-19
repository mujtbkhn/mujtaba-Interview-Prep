//map filter and reduce
//these are array functions 

//MAP
//map array is the method of creating a new array by applying function to the existing array

const arr = [1, 2, 5, 6, 8]

// const multiply = arr.map((num,i, arr ) => { return num * 2 }) // takes three arguments(the individual value, index, array)

// console.log(multiply); // returns each element with the function applied

//Polyfill

// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i], i, this))
//     }
//     return temp
// }

// const multiply1 = arr.myMap((num,i, arr ) => { return num * 2 })

// console.log(multiply1);

//FILTER
//filter returns an array of those values that satisfies the condition provided

// const filter = arr.filter((num, i, arr) => {
//     return num > 2
// })

// console.log(filter);

// Polyfill

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i])
//         }
//     }
//     return temp
// }

// const multiply1 =arr.myFilter((num, i, arr) => {
//         return num > 5
//     })

// console.log(multiply1);

//REDUCE
//the reduce method reduces down the value to a single value 

// const reduce = arr.reduce((acc, curr, i ,arr) => {
//      return acc+curr
// }, 0)

// console.log(reduce);

//Polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue

//     for (let i = 0; i < this.length; i++) {
//       accumulator=  accumulator ? cb(accumulator, this[i], i, this) : this[i];

//     }
//     return accumulator
// }

// const reduce = arr.myReduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(reduce);

//MAP VS FOREACH
//both are array functions to loop through the array but map returns a new array while forEach modifies the original array
//you can chain stuff on map like add other array funcs like filter and reduce etc whereas you cant in forEach

// const mapResult = arr.map(arr => {
//     return arr +2
// })
// console.log(mapResult); //returns new array

// const forEachResult = arr.forEach((arr) => {
//     return arr + 3
// })
// console.log(forEachResult); // doesn't return anything

//O/P BASED QUESTIONS   
//return only names with capital firstletter

let students = [
    { name: "Mujju", rollnumber: "31", marks: "98" },
    { name: "abdul", rollnumber: "2", marks: "58" },
    { name: "fav", rollnumber: "37", marks: "18" },
    { name: "Farhan", rollnumber: "17", marks: "97" }
]

// const names = students.map(stu => {
//    return stu.name.toUpperCase()
// })

// console.log(names);

//return details of those scored more than 60

// const names = students.filter(stu => {
//     return stu.marks > 97
// })
// console.log(names);

//return only who have marks > 60 and rollnumber < 18

// const names = students.filter(stu => {
//     return stu.marks > 60 && stu.rollnumber < 18
// })
// console.log(names);

//sum of marks of all students

// const sum = students.reduce((acc, curr)=> acc + parseInt(curr.marks), 0)

// console.log(sum);

//return only names of student who scored more than 60

// const names = students.filter(stud =>{
//     return stud.marks > 60
// }).map((stu => {
//     return stu.name
// }))
// console.log(names);

//return total marks of those above 60 and add 20 to below 60

// const names = students.filter(stu =>{
//     return stu.marks <60
// }).map(stu => {
//     return parseInt(stu.marks) + 20
// }).reduce((acc, curr) =>{
//     return acc + curr
// }, 0)
// console.log(names);

//Sum of every positive element

// const input = [1, -4, 12, 0, -3, 29, -150];
// const sum = input.filter((num) =>{
//     return num>0
// }).reduce((acc, curr) =>{
//     return acc + curr
// }, 0)

// console.log(sum);

//Get name initials

// const input = "George Raymond Richard Martin";

// const initials = input
//   .split(" ")
//   .map((word) => word[0].toUpperCase())
//   .join("");

// console.log(initials);

//Numeronyms
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input = "Every developer likes to mix kubernetes and javascript";

const numer = input.split(" ").map((word) => {
    const oper = word.length > 3 ? word[0] + [word.length - 2] + [word.slice(-1)] : word
    return oper
}).join(" ")

console.log(numer);