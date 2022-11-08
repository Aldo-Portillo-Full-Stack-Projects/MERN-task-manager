const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController")
const Task = require("../models/taskModel")
const router = express.Router()

    //Create a task

    router.post("/api/tasks", createTask)
    
    // Get all tasks
    router.get("/api/tasks", getTasks)

    //Get single task

    router.get("/api/tasks/:id", getTask) //Add params :id

    router.delete("/api/tasks/:id", deleteTask)

    router.put("/api/tasks/:id", updateTask)

module.exports = router