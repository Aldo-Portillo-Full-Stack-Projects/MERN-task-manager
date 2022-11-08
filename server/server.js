const { application } = require("express")
const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000 //Allows heroku to create port and if none place port 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
//Routes
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})