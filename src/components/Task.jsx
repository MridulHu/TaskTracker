import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaUndo } from 'react-icons/fa';

function Task({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`task ${task.isComplete ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div className="task-actions">
            <button onClick={() => toggleComplete(task.id)}>
              {task.isComplete ? <FaUndo /> : <FaCheck />}
            </button>
            <button onClick={() => setIsEditing(true)}>
              <FaEdit />
            </button>
            <button onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;
