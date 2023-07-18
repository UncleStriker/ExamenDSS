const express = require('express')
const router = express.Router()
const persona = require('../controllers/PersonaController')
const auth = require('../middleware/authMiddleware')

router.get('/addpersona',persona.formulario)
router.post('/agregarPersonaMy',persona.agregarPersonaMy)
router.post('/agregarPersonaPg',persona.agregarPersonaPg)
router.post('/allusers', auth.authenticate ,persona.allUsers)
router.post('/adduser', auth.authenticate ,persona.addUser) 
router.post('/deleteuser', auth.authenticate ,persona.deleteUser) 

module.exports = router
