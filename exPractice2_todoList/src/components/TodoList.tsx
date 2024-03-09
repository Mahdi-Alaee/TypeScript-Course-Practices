import { SweetAlert2Props } from "react-sweetalert2";
import { TodoType, sweetAlert2Result } from "../todo.types";
import Todo from "./Todo";
import React from "react";

interface TodoListProps {
  todos: TodoType[];
  setSwalConfigs: (configs: SweetAlert2Props) => void;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

function TodoList({ todos, setSwalConfigs, setTodos }: TodoListProps) {
  // const deleteHandler = (todoId: string) => {
  //   setSwalConfigs({
  //     show: true,
  //     title: "Are you sure?",
  //     showDenyButton: true,
  //     onConfirm: (_: sweetAlert2Result) => {
  //       setTodos((prev: TodoType[]) => {
  //         const newTodos = prev.filter((todo) => todo.id !== todoId);

  //         setTodos(newTodos);

  //         setSwalConfigs({
  //           show: true,
  //           icon: "success",
  //           title: "todo deleted successfully",
  //         });
  //       });
  //     },
  //     icon: "warning",
  //   });
  // };

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

        setTimeout(() => {
          setSwalConfigs({
            show: true,
            icon: "success",
            title: "Todo deleted successfully",
          });
        }, 100);
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
          key={todo.id}
          {...todo}
          onComplete={completeTodoHandler}
          onDelete={deleteHandler}
        />
      ))}
    </>
  );
}

export default TodoList;
