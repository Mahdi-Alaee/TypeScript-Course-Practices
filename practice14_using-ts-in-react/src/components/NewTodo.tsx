import React, { useRef } from "react";

interface propsType {
  addTodo: (title: string) => void;
}

//! component
const NewTodo: React.FC<propsType> = (props) => {
  const titleElem = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = titleElem.current!.value;
    props.addTodo(enteredTitle);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-title">To do title</label>
        <input type="text" id="todo-title" ref={titleElem} />
      </div>
      <button type="submit">Submit To do</button>
    </form>
  );
};

export default NewTodo;
