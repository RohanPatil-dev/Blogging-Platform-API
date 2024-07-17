const express = require('express')
const app = express()
const path = require("path")

const cors = require("cors")
const bodyParser = require("body-parser")

const port = 8081

// connection
const { connection } = require("./connection")

app.use(cors())
app.use(bodyParser.json())

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  static file middleware
app.use(express.static(path.resolve("./public")))

//routes
const userRoute = require("./routes/user")
const blogRoute = require("./routes/blogs")
const blogComments = require("./routes/blogComments")

// connection
connection("mongodb://127.0.0.1:27017/Blogging").then(() => {
   console.log("MongoDB is connected successfully..........");
}).catch((err) => {
   console.log(err);
});

// using route middleware
app.use("/", userRoute)
app.use("/blogs", blogRoute)
app.use("/comments",blogComments)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))