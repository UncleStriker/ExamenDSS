const express = require('express')
const router = express.Router()
const sessionRouter = require('./sessionRoutes')
const PersonaRouter = require('./PersonaRoutes')


router.use('/loggin',sessionRouter)
router.use('/persona',PersonaRouter)

module.exports = router
