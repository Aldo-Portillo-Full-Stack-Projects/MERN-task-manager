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


//Routes
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})