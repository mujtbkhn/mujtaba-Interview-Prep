const fs = require('node:fs')
const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 4
})

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.on("data", (chunks) => {
    console.log(chunks)
    writableStream.write(chunks)
})