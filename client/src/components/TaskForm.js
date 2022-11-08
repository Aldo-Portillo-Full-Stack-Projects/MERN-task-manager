import React from 'react'

export default function TaskForm({createTask, name, handleInputChange}) {
  return (
    <form className='task-form' onSubmit={createTask}>
        <input type="task" placeholder='add a task' name="name" value={name} onChange={handleInputChange} />
        <button type="submit">Add</button>
    </form>
  )
}
