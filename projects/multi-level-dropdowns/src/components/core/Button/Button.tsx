import { FC, ButtonHTMLAttributes } from "react";

import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const Button: FC<ButtonProps> = ({ text, type, children, ...rest }) => {
  return (
    <button type={type || "button"} className={classes.btn} {...rest}>
      {children || text}
    </button>
  );
};
