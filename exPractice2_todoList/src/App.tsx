import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

import "./App.css";
import { Todo, sweetAlert2Result } from "./todo.types";
import SweetAlert2, { SweetAlert2Props } from "react-sweetalert2";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [swalConfigs, setSwalConfigs] = useState<SweetAlert2Props>({});

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        isComplete: false,
      };

      setTodos((prev) => {
        setTitle("");

        return [...prev, newTodo];
      });
    } else {
    }
  };

  const deleteHandler = (todoId: string) => {
    setSwalConfigs({
      show: true,
      title: "Are you sure?",
      showDenyButton: true,
      onConfirm: (result: sweetAlert2Result) => {
        console.log(result);
        setTodos((prev) => {
          const newTodos = prev.filter((todo) => todo.id !== todoId);
          return newTodos;
        });
      },
    });
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      {/* Add New Todo Form */}
      <form className="TodoForm" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>

      {/* display todos */}
      {todos.map((todo) => (
        <div className="Todo" key={todo.id}>
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
