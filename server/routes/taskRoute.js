const express = require("express")
const Task = require("../model/taskModel")
const router = express.Router()

    //Create a task

    router.post("/api/tasks", async (req, res) => {
        try{
            const task = await Task.create(req.body)
            res.status(200).json(task)
        } catch(err){
            res.status(500).json({msg: err.message })
        }
    })
    
        //Get /Read tasks
    router.get("/api/tasks", async (req, res) => {
        try{
            const tasks = await Task.find()
            res.status(200).json(tasks)
    
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    })

module.exports = router