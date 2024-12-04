import { FC } from "react";

import classes from "./AppBar.module.css";

const AppBar: FC = () => {
  return (
    <header className={classes.appBar}>
      <h2 className={classes.title}>Multi-Level Dropdowns</h2>
      <p className={classes.subtitle}>
        In this example, I have created a menu to demonstrate multi-level
        dropdowns using only CSS.
      </p>
    </header>
  );
};

export default AppBar;
