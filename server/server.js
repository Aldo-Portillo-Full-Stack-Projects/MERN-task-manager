const dotenv = require("dotenv").config() //Essential: It makes sure that server.js can use the URI in the .env file
const express = require("express")
const connectDB = require('./config/connectDB')

const app = express()

const PORT = process.env.PORT || 5000 //Allows heroku to create port and if none place port 5000

const startServer = async () => { //make sure that database loads in before server is started
    try{
        await connectDB(); //Connects to database from the file inside config
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer()
//Routes
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})