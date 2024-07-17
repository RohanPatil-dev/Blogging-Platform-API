const jwt = require("jsonwebtoken")
const secret = "Rohan123504"

const blogs = require("../model/blogs")


async function addBlogs(req, res) {
    try {
        const { title, description } = req.body

        console.log(req.file);
        console.log(req.body);

        const coverImage = req.file

        if (!title && !description) {
            return res.status(400).json({ msg: "Form is empty" })
        } else if (!title) {
            return res.status(400).json({ msg: "Title is empty !" })
        } else if (!description) {
            return res.status(400).json({ msg: "Description is empty !" })
        } else {

            jwt.verify(req.token, secret, async (err, data) => {

                if (err) throw err

                const blog = await blogs.create({ blogger: data._id, title: title, description: description, coverImage: coverImage.filename })

                return res.status(201).json({ msg: "success", blog })
            })
        }
    } catch (error) {
        return res.status(400).json({ msg: "error", error })
    }
}

// this will show when our blog is submitted and want to see all the blogs which is created by the perticular blogger
async function renderBlog(req, res) {
    try {
        jwt.verify(req.token, secret, async (err, data) => {
            if (err) throw err

            const allData = await blogs.find({ blogger: data._id })

            return res.status(201).json({ msg: "Success", allData: allData })
        })
    } catch (error) {
        return res.status(400).json({ msg: "Data is empty !" })
    }
}

async function getAllData(req, res) {
    try {
        jwt.verify(req.token, secret, async (err, data) => {
            if (err) throw err

            const allData = await blogs.find({})

            return res.status(201).json({ msg: "Success", allData: allData })
        })

    } catch (error) {
        return res.status(400).json({ msg: "Data is empty !" })
    }
}

async function singleData(req, res) {
    try {
        jwt.verify(req.token, secret, async (err, data) => {
            if (err) throw err

            const id = req.params.id
            const allData = await blogs.findById(id)

            return res.status(201).json({ msg: "Success", allData: allData })
        })
    } catch (error) {
        return res.status(400).json({ msg: "Data is empty !" })
    }
}


function updateData(req, res) {
    try {
        jwt.verify(req.token, secret, async (err, data) => {
            if (err) throw err;
            const id = req.params.id
            const allData = await blogs.findByIdAndUpdate(id, req.body)

            return res.status(201).json({ msg: "Success", allData: allData })
        })
    } catch (error) {
        return res.status(400).json({ msg: "Data is empty !" })
    }
}


async function deleteData(req, res) {
    try {
        jwt.verify(req.token, secret, async (err, data) => {
            if (err) throw err;
            const id = req.params.id
            const allData = await blogs.findByIdAndDelete(id)

            return res.status(201).json({ msg: "Success", allData: allData })
        })
    } catch (error) {
        return res.status(400).json({ msg: "Data is empty !" })
    }
}

module.exports = { addBlogs, getAllData, singleData, updateData, deleteData, renderBlog }