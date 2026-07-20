import React from "react";
import Column from "./Column"

const Board = ({ tasks, handleDrop }) => {
  return (
    <div className="board">
      <Column  status="todo" tasks={tasks} handleDrop={handleDrop} />
      <Column status="in-progress" tasks={tasks} handleDrop={handleDrop} />
      <Column status="done" tasks={tasks} handleDrop={handleDrop} />
    </div>
  );
};

export default Board;
