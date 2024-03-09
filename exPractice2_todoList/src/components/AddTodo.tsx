import { SetStateAction, useRef, useState } from "react";
import { Todo } from "../todo.types";
import { SweetAlert2Props } from "react-sweetalert2";

interface AddTodoProps {
  //   onAddTodo: (event: React.FormEvent<HTMLFormElement>) => void;
  //   todos: Todo[];
  //   setTodos: SetStateAction<Todo | Todo[]>;
  //   setSwalConfigs: SetStateAction<SweetAlert2Props>;
  setTodos: Function;
  setSwalConfigs: Function;
}
// { onAddTodo }: AddTodoProps
function AddTodo({ setTodos, setSwalConfigs }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const inputElemRef = useRef<HTMLInputElement>(null);

  const addTodo = (event: React.FormEvent<HTMLFormElement | undefined>) => {
    event.preventDefault();

    if (title.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        isComplete: false,
      };

      setTodos((prev: Todo[]) => {
        setTitle("");
        inputElemRef.current?.focus();

        return [...prev, newTodo];
      });
    } else {
      setSwalConfigs({
        show: true,
        text: "Enter Todo Infos correctly!",
        icon: "info",
      });
    }
  };

  return (
    <form className="TodoForm" onSubmit={addTodo}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputElemRef}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;
