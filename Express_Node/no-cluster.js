const express = require('express')
const app = express()

app.get("/slow-page", (req, res) => {
    for(let i=0; i<6000000000000; i++){
        res.status(200).json({
            message: "Slow Page"
        })
    }
})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Home Page"
    })
})

app.listen(8000, () => {
    console.log("server running on Port 8000")
})