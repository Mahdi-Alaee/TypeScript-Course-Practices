import React from "react";
import { TodoType } from "../TodoList";

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({ isComplete, title, children }) => {
  const styles: React.CSSProperties = {
    backgroundColor: "#333",
    color: "#ccc",
    margin: "8px 0",
    padding: '8px',
    listStyle: 'none'
  };

  return (
    <li style={styles}>
      <span>{title}</span> <span>{isComplete ? "💋" : "🐱‍👤"}</span>
      {/* test for children */}
      {children}
    </li>
  );
};

export default Todo;
