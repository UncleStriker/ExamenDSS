
const express = require('express')
const router = express.Router()
const post = require('../controllers/PostController')
const auth = require('../middleware/authMiddleware')

router.post('/addpost',auth.authenticate,post.addPost)
router.post('/deletepost',auth.authenticate,post.deletePost)
router.post('/allposts',auth.authenticate,post.allPosts)


module.exports = router