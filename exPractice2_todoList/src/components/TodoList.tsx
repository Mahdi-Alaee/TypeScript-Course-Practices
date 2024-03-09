import { TodoType, sweetAlert2Result } from "../todo.types";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoType[];
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
        setTodos((prev: TodoType[]) => {
          const newTodos = prev.filter((todo) => todo.id !== todoId);
          return newTodos;
        });
      },
      icon: "warning",
    });
  };

  const completeTodoHandler = (todoId: string) => {
    setTodos((prev: TodoType[]) => {
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
        <Todo
          {...todo}
          onComplete={completeTodoHandler}
          onDelete={deleteHandler}
        />
      ))}
    </>
  );
}

export default TodoList;
