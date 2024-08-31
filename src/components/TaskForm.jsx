import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('Normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    addTask(taskText, taskDate, taskPriority);
    setTaskText('');
    setTaskDate('');
    setTaskPriority('Normal');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <select
        value={taskPriority}
        onChange={(e) => setTaskPriority(e.target.value)}
      >
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="primary-btn">Add Task</button>
    </form>
  );
}

export default TaskForm;
