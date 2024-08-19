//using callback
// setTimeout(function() {
//     myFunction("I want a job!!")
// }, 3000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML = value
// }

//using promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I want a job")
    }, 3000);
})
promise.then((val) => {
    document.getElementById("demo").innerHTML = val
})
    .catch((err) => {
        console.error(err)
    })

const request = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(request)

const request1 = new Promise((resolve, reject) => {
    resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"))
})
request1.then((val) => console.log(val))
    .catch((err) => console.error(err))

//using Promise.all

const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://random-data-api.com/api/v2/blood_types',
]

//1st approach
// const fetchUrls = async (urls) => {
//     try {
//         const promises = await urls.map(url => fetch(url))
//         const responses = await Promise.all(promises)
//         const data = await Promise.all(responses.map((response) => response.json()))

//         return data
//     } catch (error) {
//         console.error("error occurred: ", error) 
//     }
// }
// fetchUrls(urlsToFetch)
//     .then((data) => console.log("fetched data", data))
//     .catch((err) => console.error("error occurred", err))

//2nd approach
const fetchedPromises = urlsToFetch.map(url =>
    fetch(url)
        .then(response => response.json())
)

Promise.all(fetchedPromises)
    .then(data => {
        const responseData = data.map(response => response)
        console.log("fetched data", responseData)
    })
    .catch(err => console.error("error fetching", err))

    