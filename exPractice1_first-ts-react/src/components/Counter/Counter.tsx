import React, { useReducer } from "react";

const intialState = {
  count: 0,
};

interface stateType {
  count: number;
}

interface UpdateActions {
  type: "increment" | "decrement";
  payload: number;
}

interface resetAction {
  type: "reset";
}

type ActionType = UpdateActions | resetAction;

const reducer = (state: stateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return { count: intialState.count };

    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <h3>counter: {state.count}</h3>
      <br />
      <button onClick={dispatch.bind(null, { type: "increment", payload: 1 })}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={dispatch.bind(null, { type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <br />
      <br />
      <button onClick={dispatch.bind(null, { type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
