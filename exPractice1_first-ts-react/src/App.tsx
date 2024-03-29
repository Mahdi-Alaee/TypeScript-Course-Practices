import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { TodoType } from "./types/Todo";
import Form from "./components/Form/Form";
import Counter from "./components/Counter/Counter";
import Theme from "./components/Theme/Theme";
import { ThemeContextProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Icon from "./components/Icon/Icon";
import Translate from "./components/Translate/Translate";

// const App: React.FC = () => {
// function App(): React.ReactElement {
// function App(): React.ReactNode {
const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoType[]>();

  useEffect(() => {
    setTodos([
      {
        id: crypto.randomUUID(),
        title: "learn react",
        isComplete: true,
      },
      {
        id: crypto.randomUUID(),
        title: "learn TS",
        isComplete: true,
      },
      {
        id: crypto.randomUUID(),
        title: "learn next",
        isComplete: false,
      },
    ]);
  }, []);

  return (
    <div id="app">
      <h1>react with TS 😍</h1>
      {/* {todos?.length ? <TodoList todos={todos} /> : <h2>🙁</h2>} */}
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Theme />
      </ThemeContextProvider> */}
      {/* <AuthContextProvider>
        <Header />
      </AuthContextProvider> */}
      <Icon png position="center-bottom">
        <p>Hello</p>
      </Icon>
      {/* <Translate arg="res_en" /> */}
    </div>
  );
};

export default App;
