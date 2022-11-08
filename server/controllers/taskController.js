const Task = require("../models/taskModel");


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

//Get task

const getTask = async (req, res) => {
    console.log("The params id " +req.params) //prints id

    try{
        const {id} = req.params;
        const task = await Task.findById(id) // Allows us to find something by ID

        if(!task){
            return res.status(404).json(`NO task with id ${id}`)
        }
        res.status(200).json(task)
    } catch (err ) {
        res.status(500).json({msg: err.message})
    }
    res.send("Get single task")
}

const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task =  await Task.findByIdAndDelete(id)

        if(!task){
            return res.status(404).json(`NO task with id ${id}`)
        }

        res.status(200).send("Task deleted")
    } catch(err){
        res.status(500).json({msg: err.message})
    }
}

const updateTask = async (req, res) => {
    try{
        const {id} = req.params;

        const task = await Task.findByIdAndUpdate( //validation from schema isnt on by default so you have to runValidators
            {_id: id}, req.body, {new: true, runValidators: true}
        )

        if(!task){
            return res.status(404).json(`NO task with id ${id}`)
        }

        res.status(200).json(task)
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}