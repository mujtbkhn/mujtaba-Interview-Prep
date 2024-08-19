const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
        minLength: 5,
        maxLength: 15,
        // validate: {
        //     validator: function(v){
        //         return v.length<5 && v.length >15
        //     },
        //     message: "Title must be between 5 and 15"
        // }
    },
    description: {
        type: String,
        required: false,
        minLength: 10,
        maxLength: 20
    },
    done: {
        type: Boolean,
        default: false
    },
    section: {
        type: String,
        required: false,
        enum: ['Todo', 'Progress', 'Done'],
        default: 'Progress'
    },
    // types: {
    //     type: String,
    //     enum: {
    //         values: ['new', 'Old', 'Mid'],
    //         message: '{VALUE} is not supported'
    //     },
    // }
    // createdBy: {
    //     ref: 'newUser',
    //     type: mongoose.Schema.Types.ObjectId
    // }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema)

module.exports = { Task }