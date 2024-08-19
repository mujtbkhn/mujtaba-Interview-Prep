const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:%23Mujju11@mongoassignment.fc67lig.mongodb.net/crud")
            .then(() => console.log('mongoDB connected'))
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB