import { FC, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

export const AddTodo: FC = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    if (target.todo.value.trim() === "") return (target.todo.value = "");
    target.reset();
  };

  return (
    <Form className="py-5" onSubmit={submitHandler}>
      <h1 className="mb-5">Add Todo</h1>
      <Form.Group className="mb-4" controlId="todo">
        <Form.Label>Todo</Form.Label>
        <Form.Control required type="text" placeholder="Create a PR" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="expAt">
        <Form.Label>Due Time in sec</Form.Label>
        <Form.Control required type="number" placeholder="120" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
