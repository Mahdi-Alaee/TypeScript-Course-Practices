import React from "react";
import { TodoType } from "../TodoList";

const Todo: React.FC<TodoType> = ({ isComplete, title }) => {
  return (
    <li>
      <span>{title}</span> <span>{isComplete ? "💋" : "🐱‍👤"}</span>
    </li>
  );
};

export default Todo;
