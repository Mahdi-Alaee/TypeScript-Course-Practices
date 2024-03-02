import React from "react";
import { Todo } from "../models";
import "./TodoList.css";
interface propsType {
  items: Todo[];
  onDelete: (id: string) => void;
}

//! component
const TodoList: React.FC<propsType> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>{" "}
          <button onClick={() => props.onDelete(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
