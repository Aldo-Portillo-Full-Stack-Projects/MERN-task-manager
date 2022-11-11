import React from 'react'
import {FaCheckDouble, FaEdit, FaRegTrashAlt} from 'react-icons/fa'

export default function Task({task, name, index, completed, deleteTask, getSingleTask, setToComplete}) {

  return (
    <div className={completed ? "task completed" : "task"}>
        <p>
            <b>{index + 1}. </b> {name}
        </p>
        <div className='task-icons'>
            <FaCheckDouble color='green' onClick={() => setToComplete(task)}/>
            <FaEdit color='purple' onClick={() => getSingleTask(task)}/>
            <FaRegTrashAlt color='red' onClick={() => deleteTask(task._id)}/>
        </div>
    </div>
  )
}
