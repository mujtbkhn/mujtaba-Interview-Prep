

// async function fetchMovieDetails() {
//     try {

const { default: axios } = require("axios")

//         const data = await fetch('https://api.themoviedb.org/3/movie/653346?language=en-US',
//             {
//                 headers: {
//                     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjNlMmRiMjA5Y2UwMjY5MDRmZjMzYWJkMWM1NTU3OCIsInN1YiI6IjY1OWZhMTFmOTA3ZjI2MDEyMjIwZTA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ8TO-EaAryQd4nbVT2-SfINk8RC4lUTsX8vP1q4j1Q`
//                 }
//             }
//         )
//         const json = await data.json()
//         console.log(json)
//     } catch (error) {
//         console.error(error)
//     }
// }
// fetchMovieDetails()

// const fetchMovieDetails = async () => {
//     await fetch('https://api.themoviedb.org/3/movie/653346?language=en-US',
//         {
//             headers: {
//                 Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjNlMmRiMjA5Y2UwMjY5MDRmZjMzYWJkMWM1NTU3OCIsInN1YiI6IjY1OWZhMTFmOTA3ZjI2MDEyMjIwZTA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ8TO-EaAryQd4nbVT2-SfINk8RC4lUTsX8vP1q4j1Q`
//             }
//         }
//     )
//         .then((res) =>
//             res.json()
//         ).then(json => console.log(json))
//         .catch(err => console.log(err))
// }
// fetchMovieDetails()

// const fetchUsingAxios = async() =>{
//    const response = await axios.get('https://api.themoviedb.org/3/movie/653346?language=en-US', {
//         headers: {
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjNlMmRiMjA5Y2UwMjY5MDRmZjMzYWJkMWM1NTU3OCIsInN1YiI6IjY1OWZhMTFmOTA3ZjI2MDEyMjIwZTA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ8TO-EaAryQd4nbVT2-SfINk8RC4lUTsX8vP1q4j1Q`
//         }
//     })
//     console.log(response.data)
// }
// fetchUsingAxios()

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 5000);
})

async function myAsync() {
    console.log('1')
    const value = await myPromise;
    console.log('2')
    console.log(value)
    console.log('3')
    console.log(value)
}
myAsync()