import React from "react";
import Task from "./Task"

function TaskList({ tasks, onTaskDelete }) {

  const listOfTasks= tasks.map((task, index) => {
    const handleTaskDelete = () => onTaskDelete(task)
  return (
    <Task 
      text={task.text}
      category={task.category}
      key={index}
      onTaskDelete={handleTaskDelete}
    />
      )
  })
  
  return (
    <div className="tasks">
      {listOfTasks}
      
    </div>
  );
  }

export default TaskList;