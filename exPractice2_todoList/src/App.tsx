import React, { SetStateAction, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";

import "./App.css";
import { Todo, sweetAlert2Result } from "./todo.types";
import SweetAlert2, { SweetAlert2Props } from "react-sweetalert2";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [swalConfigs, setSwalConfigs] = useState<SweetAlert2Props>({});

  const deleteHandler = (todoId: string) => {
    setSwalConfigs({
      show: true,
      title: "Are you sure?",
      showDenyButton: true,
      onConfirm: (_: sweetAlert2Result) => {
        setTodos((prev) => {
          const newTodos = prev.filter((todo) => todo.id !== todoId);
          return newTodos;
        });
      },
      icon: "warning",
    });
  };

  const completeTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === todoId) {
          todo.isComplete = !todo.isComplete;
        }

        return todo;
      });

      return newTodos;
    });
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      {/* Add New Todo Form */}
      <AddTodo setTodos={setTodos} setSwalConfigs={setSwalConfigs} />

      {/* display todos */}
      {todos.map((todo) => (
        <div
          className="Todo"
          key={todo.id}
          onClick={completeTodoHandler.bind(null, todo.id)}
        >
          <p
            className={`${todo.isComplete ? "completed" : ""}`} // or completed className
          >
            {todo.title}
          </p>
          <div onClick={deleteHandler.bind(null, todo.id)}>
            <FaTrash style={{ color: "red" }} />
          </div>
        </div>
      ))}

      <SweetAlert2
        {...swalConfigs}
        onResolve={() => {
          setSwalConfigs({});
        }}
      />
    </div>
  );
}

export default App;
