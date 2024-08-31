import React from 'react';
import Task from './Task.jsx';

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
