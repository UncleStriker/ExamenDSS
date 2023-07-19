const express = require('express')
const router = express.Router()
const sessionFunctions = require('../controllers/MainController')
const addFunctions = require('../controllers/PersonaController')

router.get('/login', sessionFunctions.loginForm)
router.post('/session', sessionFunctions.session)
router.post ('/addUser', addFunctions.addUser)

module.exports = router
