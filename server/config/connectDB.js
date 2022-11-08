const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Mongo DB connected: ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }   
}

module.exports = connectDB

//USe this in server.js to connect to mongDB
//Way # 2  to connect to server
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

//startServer()