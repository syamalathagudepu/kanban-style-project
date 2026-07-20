import React from "react";

const Task = ({ task }) => {
  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
    >
      {task.title}
    </div>
  );
};

export default Task;
