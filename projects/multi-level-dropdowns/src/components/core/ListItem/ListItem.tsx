import { FC, LiHTMLAttributes } from "react";

import classes from "./ListItem.module.css";

type ListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const ListItem: FC<ListItemProps> = ({ children, ...rest }) => {
  return (
    <li className={classes.listItem} {...rest}>
      {children}
    </li>
  );
};
