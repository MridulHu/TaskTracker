import React, { useState } from 'react';
import '../App.jsx';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = (text, date, priority) => {
    const newTask = { id: Date.now(), text, date, priority, isComplete: false };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedText, updatedDate, updatedPriority) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: updatedText, date: updatedDate, priority: updatedPriority } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.isComplete);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
      <button className="danger-btn" onClick={clearCompletedTasks}>
        Clear Completed
      </button>
    </div>
  );
}

export default TaskApp;
