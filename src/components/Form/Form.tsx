import { FC, FormEvent } from "react";

import Options from "./Options";
import Input from "../core/Input";
import Select from "../core/Select";
import Button from "../core/Button";
import useMenu from "../../hooks/useMenu";

import classes from "./Form.module.css";

const Form: FC = () => {
  const { menu, addMenu } = useMenu();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { parent, child } = event.target as HTMLFormElement;
    addMenu?.({ parentID: parent.value, name: child.value });
    child.value = "";
    parent.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Select label="Parent" name="parent" placeholder="eg: Home Page" required>
        <Options options={menu} />
      </Select>
      <Input label="Child" name="child" placeholder="eg: Page 1" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
