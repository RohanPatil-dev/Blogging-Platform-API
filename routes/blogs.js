const express = require("express");
const router = express.Router()

const jwt = require("jsonwebtoken")
const secret = "Rohan123504"

// authentication middleware
const {authorization} = require("../Middleware/auth")

const blogs = require("../model/blogs")

const {addBlogs,getAllData, singleData, updateData, deleteData, renderBlog} = require("../controller/blogs")

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./public/uploads/"))
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()} - ${file.originalname}`
        cb(null, filename)
    }
})

const upload = multer({storage : storage})

router.post('/addBlogs',authorization,upload.single("coverImage"),addBlogs)

router.get("/getAllData",authorization,getAllData)

router.get("/singleData/:id",authorization,singleData)

router.put("/updateData/:id",authorization,updateData)

router.delete("/deleteData/:id",authorization,deleteData)

router.get("/renderBlog",authorization,renderBlog)

module.exports = router