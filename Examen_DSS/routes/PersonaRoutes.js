const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const persona = require('../controllers/PersonaController')

router.post('/adduser', auth.authenticate, persona.addUser) 
router.post('/deleteuser', auth.authenticate ,persona.deleteUser) 
router.post('/allusers', auth.authenticate ,persona.allUsers)

module.exports = router
