const express = require("express")
const { createTask, getTasks } = require("../controllers/taskController")
const Task = require("../model/taskModel")
const router = express.Router()

    //Create a task

    router.post("/api/tasks", createTask)
    
        //Get /Read tasks
    router.get("/api/tasks", getTasks)

module.exports = router