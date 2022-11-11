import React from 'react'
import { toast } from 'react-toastify'
import TaskForm from './TaskForm'
import axios from 'axios'
import { URL } from '../App'
import Task from './Task'
import loadingImg from '../assets/loader.gif'
 
export default function TaskList() {

    const [tasks, setTasks] = React.useState([])

    const[completedTasks, setCompletedTasks] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(false)

    const [formData, setFormData] = React.useState({
        name: "",
        completed: false
    })

    const {name} = formData

    const handleInputChange = (e) => {

        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const getTasks = async () => {
        setIsLoading(true)

        try{
            const {data} = await axios.get(`${URL}/api/tasks`)
            setTasks(data)
            setIsLoading(false)
        } catch(err) {
            toast.error(err.message)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getTasks()
    }, [])

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

    const deleteTask = async (id) => {
        try{
            await axios.delete(`${URL}/api/tasks/${id}`);
            getTasks()
            toast.success("Task deleted successfully")
            console.log(id)
        } catch (err) {
            toast.error(err.message)
        }
    }

  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
        <div className="--flex-between --pb">
          <p>
            <b>Total Tasks: </b> 0
          </p>
          <p>
            <b>Completed Tasks: </b> 0
          </p>
        </div>
        <hr />

        {  
            isLoading && (
                <div className="--flex-center">
                    <img src={loadingImg} alt="Loading..." />
                </div>
            )
        }

        {
            !isLoading && tasks.length === 0 ? (
                <p className='--py'>No task found. Add a task.</p>
            ) : (
                <>
                {tasks.map((task, index) => {
                    return(
                        <Task key={task._id} task={task} name={task.name} index={index} deleteTask={deleteTask} />
                    )
                })}
                </>
            )
        }
        <Task />
    </div>
  )
}
