import { FC } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./contexts/TodoContext";

const App: FC = () => (
  <TodoContextProvider>
    <AddTodo />
    <TodoList />
  </TodoContextProvider>
);

export default App;
