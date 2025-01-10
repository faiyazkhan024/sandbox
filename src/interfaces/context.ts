import { ReactNode } from "react";

export interface TC {
  todos: Array<Todo>;
  createTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (todo: Omit<Todo, "task" | "expAt">) => void;
  deleteTodo: (todo: Pick<Todo, "id">) => void;
}

export interface ProviderProps {
  children: ReactNode;
}

export type TodoReducer = (
  state: Array<Todo>,
  action: {
    type: string;
    payload: Partial<Todo>;
  }
) => Array<Todo>;
