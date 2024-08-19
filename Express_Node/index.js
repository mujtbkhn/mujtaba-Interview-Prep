const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const authRoute = require('./routes/auth')
const pageRoute = require('./routes/page')
const errorHandler = require('./middlewares/errorHandler')

const url = 'mongodb+srv://admin:%23Mujju11@mongoassignment.fc67lig.mongodb.net/practise'

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/page', pageRoute)

// app.use(errorHandler)

mongoose.connect(url)
    .then(() => console.log('database connected!'))
    .catch((err) => console.error(err))

app.listen(3000, () => {
    console.log('server running on port 3000')
})