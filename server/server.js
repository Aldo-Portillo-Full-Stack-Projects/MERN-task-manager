const dotenv = require("dotenv").config() //Essential: It makes sure that server.js can use the URI in the .env file
const express = require("express")
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose")

const app = express()

const PORT = process.env.PORT || 5000 //Allows heroku to create port and if none place port 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

//Middleware: Function that can be slotted inside routes that have access to req objects and response objects and next function

app.use(express.json()) //Gives us data passed into body

app.use(express.urlencoded({extended: false})) //Gives data passed into form

//Routes
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/tasks", (req, res) => {
    res.send("<h1>Tasks Page</h1>")
})

//Create a task

app.post("/api/tasks", async (req, res) => {
    console.log(req.body)
    res.send("Task Created")
})