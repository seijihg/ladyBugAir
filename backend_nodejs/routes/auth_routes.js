const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const isLoggedIn = require('../middleware/isLoggedIn')

router.post('/login', authController.login)
router.get('/authenticate', isLoggedIn, authController.authenticate)

module.exports = router