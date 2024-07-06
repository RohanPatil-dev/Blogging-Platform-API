const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true,
        unique : true
    },
     password : {
        type : String,
        required : true
    },
    role : {
        type : ["user,blogger"],
        default : "user"
    }
    
});


var user = mongoose.model('user', UserSchema );

module.exports = user
















// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema({
//     content:{
//         type:String
//     }
// });

// const bookSchema = mongoose.Schema({
//     title : {
//         type : String,
//         required : true
//     },
//     author : {
//         type : String,
//         required : true,
//     },
//     generic : {
//         type : String,
//         required : true
//     },
//     review: [commentSchema]
// });


// const bookModel = mongoose.model('book', bookSchema );

// module.exports = bookModel



// const express = require('express')

// const books = require("../model/management")

// const router = express.Router()

// const jwt = require("jsonwebtoken")

// const secret = "Rohan@123"

// router.post('/books/:id/reviews', async (req, res) => {
//     console.log(req.body)
//     try {

//         jwt.verify(req.token, secret, async(err, data) => {
//             const { content } = req.body;
//             const bookId = req.params.id;

//             const newComment = { content };
//             const updatedBook = await books.findByIdAndUpdate(
//                 bookId,
//                 { $push: { review: newComment } },
//                 { new: true }
//             );

//             res.json(updatedBook);
//         })
//     } catch (error) {
//         res.status(500).json({ msg: "server error" });
//     }
// })

// router.get('/books/:id/reviews', async(req, res) => {
//     const id = req.params.id
//     try {
//         jwt.verify(req.token, secret, async(err, data) => {
//         const getComments = await books.findById(id)

//         if(!getComments){
//             return res.status(404).json({error :"Book not found !"})
//         }else{
//             return res.status(200).json(getComments.review)
//         }
//     })
//     } catch (err) {
//        return res.status(400).json("Comments not found !")
//     }
// })


// module.exports = router