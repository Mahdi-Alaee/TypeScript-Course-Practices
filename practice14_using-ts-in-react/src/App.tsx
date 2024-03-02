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

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
