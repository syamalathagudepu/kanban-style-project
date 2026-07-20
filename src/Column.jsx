import React from "react";
import Task from "./Task";

const Column = ({ status, tasks, handleDrop }) => {
  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h2>{status.toUpperCase()}</h2>
      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default Column;
