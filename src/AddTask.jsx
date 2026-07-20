import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task..."
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
