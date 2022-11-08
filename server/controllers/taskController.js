const Task = require("../model/taskModel");


//File to save all callback functions

//Create a task
const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch(err){
        res.status(500).json({msg: err.message })
    }
}

//Get all tasks
const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {
    createTask,
    getTasks
}