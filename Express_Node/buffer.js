const buffer = new Buffer.from("Mujtaba", "utf-8")
console.log(buffer.toJSON())  
console.log(buffer.toString())  
console.log(buffer)

buffer.write("Mujju khan")
console.log(buffer.toString())