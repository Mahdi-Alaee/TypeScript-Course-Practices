import { FaTrash } from "react-icons/fa";
import { Todo, sweetAlert2Result } from "../todo.types";

interface TodoListProps {
  todos: Todo[];
  setSwalConfigs: Function;
  setTodos: Function;
}

function TodoList({ todos, setSwalConfigs, setTodos }: TodoListProps) {
  const deleteHandler = (todoId: string) => {
    setSwalConfigs({
      show: true,
      title: "Are you sure?",
      showDenyButton: true,
      onConfirm: (_: sweetAlert2Result) => {
        setTodos((prev: Todo[]) => {
          const newTodos = prev.filter((todo) => todo.id !== todoId);
          return newTodos;
        });
      },
      icon: "warning",
    });
  };

  const completeTodoHandler = (todoId: string) => {
    setTodos((prev: Todo[]) => {
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
    <>
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
    </>
  );
}

export default TodoList;
