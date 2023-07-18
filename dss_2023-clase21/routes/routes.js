const express = require('express')
const router = express.Router()
const LoginRouter = require('./LoginRoutes')
const MainRouter = require('./MainRoutes')
const PersonaRouter = require('./PersonaRoutes')
const PostRouter = require('./PostRoutes')


router.use('/login',LoginRouter)
router.use('/main',MainRouter)
router.use('/persona',PersonaRouter)
router.use('/post',PostRouter)

module.exports = router