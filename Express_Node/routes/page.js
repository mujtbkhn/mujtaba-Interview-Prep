const express = require('express')
const { getProfile, getAdmin } = require('../controllers/page')
const { decodeJwt } = require('../middlewares/decodeJWT')
const router = express.Router()

router.get('/profile', getProfile)
router.get('/admin', decodeJwt, getAdmin)


module.exports = router