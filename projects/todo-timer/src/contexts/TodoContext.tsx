import { FC, createContext, useCallback, useReducer } from "react";
import { v4 } from "uuid";

import { TC, ProviderProps, TodoReducer } from "../interfaces/context";

const initialState: Array<Todo> = JSON.parse(
  localStorage.getItem("todos") ?? "[]"
);

const setLocal = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

const todoReducer: TodoReducer = (state, { type, payload }) => {
  switch (type) {
    case "Create": {
      const newTodo = { id: v4(), ...payload } as Todo;
      return setLocal([...state, newTodo]);
    }
    case "Update": {
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) {
        return state;
      } else {
        state[index] = { ...state[index], ...payload };
        return setLocal([...state]);
      }
    }
    case "Delete":
      return setLocal(state.filter(({ id }) => id !== payload.id));
    default:
      return state;
  }
};

const TodoContext = createContext<TC>({
  todos: initialState,
} as TC);

export const TodoContextProvider: FC<ProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const createTodo: TC["createTodo"] = useCallback(
    (todo) =>
      dispatch({
        type: "Create",
        payload: todo,
      }),
    []
  );
  const updateTodo: TC["updateTodo"] = useCallback(
    (todo) =>
      dispatch({
        type: "Update",
        payload: todo,
      }),
    []
  );
  const deleteTodo: TC["deleteTodo"] = useCallback(
    (todo) => dispatch({ type: "Delete", payload: todo }),
    []
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
