const express = require('express')
const { registerUser, loginUser, verifyUser } = require('../controllers/auth')
const { checkToken, verifyToken } = require('../middlewares/decodeJWT')
const {errorHandler} = require('../middlewares/errorHandler')
const  access  = require('../middlewares/access')
const router = express.Router()

router.post('/register', errorHandler, registerUser)
router.post('/login',access, loginUser)
router.get('/verify', checkToken, verifyToken, verifyUser)
router.get('/access', access)

module.exports = router