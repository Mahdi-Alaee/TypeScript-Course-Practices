import React from "react";
import { Todo } from "../models";

interface propsType {
  items: Todo[];
}

//! component
const TodoList: React.FC<propsType> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
