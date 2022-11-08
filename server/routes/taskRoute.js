const express = require("express")
const { createTask, getTasks, getTask, deleteTask } = require("../controllers/taskController")
const Task = require("../models/taskModel")
const router = express.Router()

    //Create a task

    router.post("/api/tasks", createTask)
    
    // Get all tasks
    router.get("/api/tasks", getTasks)

    //Get single task

    router.get("/api/tasks/:id", getTask) //Add params :id

    router.delete("/api/tasks/:id", deleteTask)

module.exports = router