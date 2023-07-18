const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
require('dotenv').config()
const router = require('./routes/routes')
app.use('/',router)
app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000')
})