import React, { useState } from "react";
import Board from "./Board";
import AddTask from "./AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Build Kanban Board", status: "in-progress" },
    { id: 3, title: "Completed!", status: "done" },
  ]);

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("id");
    setTasks(tasks.map(task =>
      task.id.toString() === id ? { ...task, status: newStatus } : task
    ));
  };

  const addTask = (title) => {
    if (title.trim() === "") return;
    const newItem = {
      id: tasks.length + 1,
      title,
      status: "todo"
    };
    setTasks([...tasks, newItem]);
  };

  return (
    <div>
      <h1>Kanban Board Tasks</h1>
      <AddTask addTask={addTask} />
      <Board tasks={tasks} handleDrop={handleDrop} />
    </div>
  );
};

export default App;
