'use client'
import React, { useState } from 'react'

// Initial user data with completed tasks
const initialUser = {
  id: 1,
  name: 'Charlie',
  completedTasks: ['Task 1', 'Task 2'],
}

const CompletedTasksComponent = () => {
  const [user, setUser] = useState(initialUser)

  // Function to add a task to the list of completed tasks
  const addTask = (task) => {
    setUser((element) => {
      // Check if the task is already in the list to avoid duplicates
      if (!element.completedTasks.includes(task)) {
        // If not, add the new task to the list
        return { ...element, completedTasks: [...element.completedTasks, task] }
      }
      // If the task is already in the list, return the current state
      return element
    })
  }

  // Function to remove a task from the list of completed tasks
  const removeTask = (task) => {
    setUser((element) => {
      // Filter out the task to be removed from the list
      const removed = element.completedTasks.filter((item) => item !== task)
      // Update the state with the new list of completed tasks
      return {
        ...element,
        completedTasks: removed,
      }
    })
  }

  return (
    <div>
      <h1>{user.name} Completed Tasks</h1>
      <ul>
        {user.completedTasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask('Task 3')}>Add Task 3</button>
      <button onClick={() => addTask('Task 4')}>Add Task 4</button>
    </div>
  )
}

export default CompletedTasksComponent

/*
Learnings from this question:

1. **State Management**: How to manage a complex state object using `useState` in React.
2. **Adding Items**: Implementing a function to add items to an array within an object in the state, while avoiding duplicates.
3. **Removing Items**: Implementing a function to remove items from an array within an object in the state.
4. **Conditional Updates**: How to conditionally update the state based on the current state values.
5. **Spread Operator**: Using the spread operator (`...`) to create new state objects and arrays, ensuring immutability.
6. **Rendering Lists**: Rendering a list of items from the state and adding functionality to each item (e.g., remove button).
7. **Event Handlers**: Adding event handlers to elements to modify the state when clicked.
*/
