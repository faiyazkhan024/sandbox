import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react";

import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Input: FC<InputProps> = ({ name, type, label, labelProps, ...rest }) => {
  return (
    <label htmlFor={name} className={classes.label} {...labelProps}>
      {labelProps?.children || label}
      <input
        id={name}
        name={name}
        type={type || "text"}
        className={classes.input}
        {...rest}
      />
    </label>
  );
};

export default Input;
