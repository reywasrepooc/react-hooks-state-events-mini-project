import React, { useState } from "react";

function NewTaskForm({categories, onTaskSubmit}) {
  const [taskText, setTaskText ] = useState("")
  const [taskCategory, setTaskCategory] = useState("")
  
  const selectableCategories = categories.filter(category => category !== "All")

  const categoryOptions= selectableCategories.map(category => (
    <option key={category}>{category}</option>
  ))
const handleSubmit = (event) => {
  event.preventDefault()

  if (taskText === "" || taskCategory === "") {
    alert("How Dare You")
  } else {
  onTaskSubmit({
    text: taskText,
    category: taskCategory
  })

  setTaskText("")
  setTaskCategory("")
  }
}

const handleTextChange = (event) => {
  setTaskText(event.target.value)
}

const handleCategoryChange = (event) => {
  setTaskCategory(event.target.value)
}


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
        type="text" 
        name="text"
        onChange={handleTextChange}
        value={taskText} />
      </label>
      <label>
        Category
        <select 
        name="category"
        onChange={handleCategoryChange}
        value={taskCategory}
        >
          <option />
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
