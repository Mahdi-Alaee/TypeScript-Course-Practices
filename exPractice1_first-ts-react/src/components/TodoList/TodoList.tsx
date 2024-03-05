import React from "react";
import Todo from "./Todo/Todo";

export interface TodoType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
