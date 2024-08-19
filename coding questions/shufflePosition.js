// function shuffleArray(arr) {

//     const result = arr.slice();
//     console.log(result)

//     for (let i = 0; i<result.length ; i++) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [result[i], result[j]] = [result[j], result[i]]
//     }
//     return result
// }
// const inputArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(inputArray);

// console.log(shuffledArray);



function shuffle(arr) {
    // modify the arr inline to change the order randomly
    const result = arr.slice()
    let j
    for (let i = 0; i < result.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]
    }
    return result
}
let inputArr = [1, 2, 5, 56, 8]
let shuffledArray = shuffle(inputArr)
console.log(shuffledArray)