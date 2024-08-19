const mongoose = require('mongoose')

const newUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 10
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isPremium: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
})

const newUser = mongoose.model('newUser', newUserSchema)


module.exports = { newUser }