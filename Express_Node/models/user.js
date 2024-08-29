const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 8,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        required: true,
        miLength: 8
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isPremium: {
        type: Boolean,
        required: false
    },
    premium: {
        type: String,
        enum: ['monthly', 'quaterly', 'yearly'],
        required: false,
        default: 'monthly'
    }

})

const User = mongoose.model('User', UserSchema)
module.exports = User

// const newUserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         minlength: 5,
//         maxlength: 10
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isAdmin:{
//         type: Boolean,
//         default: false,
//     },
//     isPremium: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
// })

// const newUser = mongoose.model('newUser', newUserSchema)


// module.exports = { newUser }