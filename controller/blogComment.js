const jwt = require("jsonwebtoken")
const secret = "Rohan123504"

const blogs = require("../model/blogs")

async function addReview(req,res) {
    try {

        jwt.verify(req.token, secret, async (err, data) => {

            if (err) throw err

            console.log(req.body)

            const { content } = req.body;
            const id = req.params.id;

            const newComment = { content };
            const updatedBook = await blogs.findByIdAndUpdate(
                id,
                { $push: { review: newComment } },
                { new: true }
            );
            return res.json(updatedBook);

        })
    } catch (error) {
        return res.json({ msg: "Server error" })
    }
}

async function getReview(req,res) {
    try {

        jwt.verify(req.token, secret, async (err, data) => {

            if (err) throw err

            const id = req.params.id

            const getComments = await blogs.findById(id)

            if (!getComments) {
                return res.status(404).json({ error: "Blog not found !" })
            } else {
                return res.status(200).json(getComments.review)
            }

        })
    } catch (err) {
        return res.json({ msg: "Server error" })
    }
}

module.exports = {addReview,getReview}