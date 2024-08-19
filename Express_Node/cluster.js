import cluster from "node:cluster"
import os from "node:os"
import express from "express"
import process from "node:process";

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    for(let i=0; i<totalCPUs;i++){
        cluster.fork()
    }
}else{
    const app = express()
    const PORT = 8000;

    app.get('/', (req, res) => {
        return res.json({
            message: `Hello from server ${process.pid}`
        })
    })

    app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
}