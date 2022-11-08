import React from 'react'
import { toast } from 'react-toastify'
import TaskForm from './TaskForm'
import axios from 'axios'
import { URL } from '../App'

export default function TaskList() {

    const [formData, setFormData] = React.useState({
        name: "",
        completed: false
    })

    const {name} = formData

    const handleInputChange = (e) => {

        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const createTask = async (e) => {
        e.preventDefault();
        
        if(name === ""){
            return toast.error("Input field cannot be empty")
        }

        try{
            await axios.post(`${URL}/api/tasks`, formData)
            toast.success("Task added successfully")
            setFormData({...formData, name: ""})
        } catch (err) {
            toast.error(err.message)
        }
    }

  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
    </div>
  )
}
