import React from "react";

const Form: React.FC = () => {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submited!");
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // event.preventDefault();
    console.log(event.target.value);
  }

  function clickHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    console.log("clicked!");
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} type="text" placeholder="username ..." />
      <button onClick={clickHandler}>click me!</button>
    </form>
  );
};

export default Form;
