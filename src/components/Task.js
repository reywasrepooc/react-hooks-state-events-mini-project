import React from "react";

function Task({text, category, onTaskDelete}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      onClick={onTaskDelete} 
      className="delete"
      >
        X
      </button>
    </div>
  );
}

export default Task;
