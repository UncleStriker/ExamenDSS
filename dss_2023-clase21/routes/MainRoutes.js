const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')

router.get('/test',main.test)
router.post('/postData',main.postData)
router.get('/index',main.index)
router.post('/enviarDatos',main.enviarDatos)
router.get('/ejercicio',main.ejercicio)
router.get('/ejercicio',main.ejercicio)
router.post('/recibeDataEjercicio',main.recibeDataEjercicio)
router.post('/preguntaopenai',main.preguntaOpenai)

module.exports = router