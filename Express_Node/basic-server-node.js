// const express = require('express')
// const app = express()
// const cors = require('cors')
const http = require('http')
// app.use(express.json())
// app.use(cors())

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end("Hello from nodejs server")
    }
    else if(req.url === "/user"){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Users page')
    }
})

server.listen(4000, ()=>{
    console.log('server running on port 4000')
})