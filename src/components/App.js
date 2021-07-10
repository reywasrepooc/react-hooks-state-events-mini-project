import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory ] = useState("All")
  const [ currentTasks, setCurrentTasks ] = useState(TASKS)


  const tasksToDisplay = currentTasks.filter(task => (
    selectedCategory === "All" ? true : task.category === selectedCategory
    ))
    
    const handleTaskDelete = (task) => {
      const filteredTasks = currentTasks.filter(currentTask => currentTask !== task)
      setCurrentTasks(filteredTasks)
    }

    const handleAddTask = (task) => {
      setCurrentTasks([...currentTasks, task])
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      />
      <NewTaskForm 
      onTaskSubmit={handleAddTask}
      categories={CATEGORIES}/>
      <TaskList 
      tasks={tasksToDisplay}
      onTaskDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;
