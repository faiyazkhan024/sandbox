import { FC, SelectHTMLAttributes, LabelHTMLAttributes } from "react";

import classes from "./Select.module.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export const Select: FC<SelectProps> = ({
  name,
  label,
  children,
  placeholder,
  labelProps,
  ...rest
}) => {
  return (
    <label htmlFor={name} className={classes.label} {...labelProps}>
      {labelProps?.children || label}
      <select id={name} name={name} className={classes.select} {...rest}>
        {placeholder && (
          <option value="" hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </label>
  );
};
