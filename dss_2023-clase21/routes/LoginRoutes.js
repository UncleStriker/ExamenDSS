const express = require('express')
const router = express.Router()
const loginFunctions = require('../controllers/LoginController')

router.get('/login', loginFunctions.loginForm)
router.post('/doLogin', loginFunctions.doLogin)

module.exports = router