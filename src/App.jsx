import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Build Kanban Board", status: "in-progress" },
    { id: 3, title: "Celebrate!", status: "done" },
  ]);

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("id");
    setTasks(
      tasks.map((task) =>
        task.id.toString() === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const Column = ({ status }) => (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h2>{status.toUpperCase()}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
          >
            {task.title}
          </div>
        ))}
    </div>
  );

  return (
    <div className="board">
      <Column status="todo" />
      <Column status="in-progress" />
      <Column status="done" />
    </div>
  );
}

export default App;
