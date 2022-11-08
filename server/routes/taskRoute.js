const express = require("express")
const { createTask, getTasks, getTask } = require("../controllers/taskController")
const Task = require("../models/taskModel")
const router = express.Router()

    //Create a task

    router.post("/api/tasks", createTask)
    
    // Get all tasks
    router.get("/api/tasks", getTasks)

    //Get single task

    router.get("/api/tasks/:id", getTask) //Add params :id

module.exports = router