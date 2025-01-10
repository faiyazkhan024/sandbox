import { FC } from "react";
import { ListGroup } from "react-bootstrap";

import TodoListItem from "./TodoListItem";
import useTodo from "../hooks/useTodo";

const TodoList: FC = () => {
  const { todos } = useTodo();

  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ListGroup>
  );
};
export default TodoList;
