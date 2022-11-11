import React from 'react'
import {FaCheckDouble, FaEdit, FaRegTrashAlt} from 'react-icons/fa'

export default function Task({name, index, deleteTask}) {

  return (
    <div className='task'>
        <p>
            <b>{index + 1}. </b> {name}
        </p>
        <div className='task-icons'>
            <FaCheckDouble color='green' />
            <FaEdit color='purple' />
            <FaRegTrashAlt color='red' onClick={deleteTask}/>
        </div>
    </div>
  )
}
