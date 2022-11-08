import React from 'react'
import TaskList from './components/TaskList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Task from './components/Task';

export const URL = process.env.REACT_APP_SERVER_URL

function App() {
  return (
    <div className="app">
      <div className='task-container'>
        <TaskList />
        <div className="--flex-between --pb">
          <p>
            <b>Total Tasks: </b> 0
          </p>
          <p>
            <b>Completed Tasks: </b> 0
          </p>
        </div>
        <hr />
        <Task />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
