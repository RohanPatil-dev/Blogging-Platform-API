const express = require("express");
const router = express.Router()

const jwt = require("jsonwebtoken")
const secret = "Rohan123504"

// authentication middleware
const {authorization} = require("../Middleware/auth")

const blogs = require("../model/blogs")

const {addBlogs,getAllData, singleData, updateData, deleteData, renderBlog} = require("../controller/blogs")

router.post('/addBlogs',authorization,addBlogs)

router.get("/getAllData",authorization,getAllData)

router.get("/singleData/:id",authorization,singleData)

router.put("/updateData/:id",authorization,updateData)

router.delete("/deleteData/:id",authorization,deleteData)

router.get("/renderBlog",authorization,renderBlog)

module.exports = router