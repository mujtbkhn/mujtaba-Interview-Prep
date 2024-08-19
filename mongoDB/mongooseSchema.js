const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 40
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

let newUser = new User({
    name: 'abdul rehman mujtaba',
    email: 'mujjukhn@gmail.com'
})

newUser.save()
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.error(err)
    })

console.log("user:", newUser)

module.exports = {
    User
}

