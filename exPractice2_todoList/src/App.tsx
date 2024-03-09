import { useState } from "react";

import "./App.css";
import { TodoType, sweetAlert2Result } from "./todo.types";
import SweetAlert2, { SweetAlert2Props } from "react-sweetalert2";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [swalConfigs, setSwalConfigs] = useState<SweetAlert2Props>({});

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      {/* Add New Todo Form */}
      <AddTodo setTodos={setTodos} setSwalConfigs={setSwalConfigs} />

      {/* display todos */}
      <TodoList
        setSwalConfigs={setSwalConfigs}
        setTodos={setTodos}
        todos={todos}
      />

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
