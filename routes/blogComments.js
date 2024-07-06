const express = require('express')

const router = express.Router()

const jwt = require("jsonwebtoken")
const secret = "Rohan123504"

const { authorization } = require("../Middleware/auth")

const {addReview, getReview} = require("../controller/blogComment")

router.post('/blog/:id/reviews', authorization,addReview)

router.get('/blog/:id/reviews', authorization,getReview)

module.exports = router