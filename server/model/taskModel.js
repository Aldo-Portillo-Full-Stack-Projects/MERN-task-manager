const mongoose = require("mongoose")

//Create schema to decide how to structure data

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"],
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
        }
    }, 
    {
        timestamps: true,
    }
)

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;