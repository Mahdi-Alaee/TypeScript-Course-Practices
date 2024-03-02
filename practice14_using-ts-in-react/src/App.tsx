import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models";

//! component
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: crypto.randomUUID(), title: "todo 1" },
  ]);

  const addTodo = (title: string) =>
    setTodos((prev: Todo[]) => [...prev, { id: crypto.randomUUID(), title }]);

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
