import React from "react";

// In Task.js
function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDelete(task)}>
        X
      </button>
    </div>
  );
}


export default Task;
