const axios = require('axios')
//Axios and Fetch both are used to hit a backend api and do something with it however both have their unique ways and ups and downs doing it

//Fetch :
// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

// function fetch1() {

//     fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then((json) => console.log(json.products.length))
// }
// fetch1()

//more cleaner syntax of it
async function logMovies() {
    const response = await fetch("https://dummyjson.com/products");
    const movies = await response.json();
    console.log(movies.products.length);
}
logMovies()

//Axios: 
//Axios is written by smart developers that makes sending HTTP request a lot easier with a cleaner syntax and a lot more functionality

async function axiosF() {
    const response = await axios.get("https://dummyjson.com/products") //axios is smart enough to understand this is a json data (be it any data like a text data it will handle it automatically and in fetch you need to write instead of .json() .text())
    console.log(response.data.length) //always need to write .data to access values in axios
}
axiosF()

//CHANGING THE METHOD OF HTTP 
//Fetch
async function logMovies() {
    const response = await fetch("https://dummyjson.com/products", {
        method: "POST"
    });
    const movies = await response.json();
    console.log(movies.products.length);
}
logMovies()

//axios
async function axiosF() {
    const response = await axios.post("https://dummyjson.com/products")
    console.log(response.data.length)
}
axiosF()

//Request config

//AXIOS
async function axiosConfig() {
    const response = await axios.post("https://dummyjson.com/products",
        {
            username: "Mujtaba",
        },
        {
            headers: {
                Authorization: "Bearer 123"
            }
        }
    );
    console.log(response.data.length)
}
//in a POST, PUT and DELETE request in axios the 1st argument is the url 
// 2nd argument is the body
// 3rd argument is the headers

//while in a GET request the 1st argument is the url 
// 2nd argument is the headers
axiosConfig()

//another way of writing axios is
async function axiosDiffWay() {
    const response = await axios(
        {
            url: "https://dummyjson.com/products",
            method: "POST",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "mujtaba"
            }
        }
    );
    console.log(response.data.length)
}
axiosDiffWay()