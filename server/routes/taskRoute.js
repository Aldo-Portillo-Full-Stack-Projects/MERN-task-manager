const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController")
const Task = require("../models/taskModel")
const router = express.Router()

    //Create a task

    router.post("/", createTask)
    
    // Get all tasks
    router.get("/", getTasks)

    //Get single task

    router.get("/:id", getTask) //Add params :id

    router.delete("/:id", deleteTask)

    router.put("/:id", updateTask) //When using put you have to declare everything 
    //Just change it to patch in route and controller to update a single part of data
module.exports = router