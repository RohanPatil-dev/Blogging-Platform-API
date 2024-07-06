const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content:{
        type:String
    }
});

const blogSchema = mongoose.Schema({
    blogger : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }, 
     title : {
        type : String,
        required : true,
    },
     description : {
        type : String,
        required : true
    },
     review: [commentSchema]
});


var blogs = mongoose.model('blogs', blogSchema );

module.exports = blogs