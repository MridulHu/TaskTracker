import React, { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = (text, date, priority) => {
    const newTask = { id: Date.now(), text, date, priority, isComplete: false };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]); 
  };

  const updateTask = (id, updatedText, updatedDate, updatedPriority) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, text: updatedText, date: updatedDate, priority: updatedPriority } : task);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const markAllAsComplete = () => {
    const updatedTasks = tasks.map(task => ({ ...task, isComplete: true }));
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.isComplete);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const filterTasks = (filter) => {
    let filtered;
    if (filter === 'all') {
      filtered = tasks;
    } else if (filter === 'completed') {
      filtered = tasks.filter(task => task.isComplete);
    } else if (filter === 'incomplete') {
      filtered = tasks.filter(task => !task.isComplete);
    } else if (filter === 'highPriority') {
      filtered = tasks.filter(task => task.priority === 'High');
    }
    setFilteredTasks(filtered);
  };

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      
      <div className="button-container">
        <button className="primary-btn" onClick={() => filterTasks('all')}>All</button>
        <button className="primary-btn" onClick={() => filterTasks('completed')}>Completed</button>
        <button className="primary-btn" onClick={() => filterTasks('incomplete')}>Incomplete</button>
        <button className="highlight-btn" onClick={() => filterTasks('highPriority')}>High Priority</button>
        <button className="danger-btn" onClick={clearCompletedTasks}>Clear Completed</button>
      </div>

      <TaskList 
        tasks={filteredTasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
      />
    </div>
  );
}

export default App;
