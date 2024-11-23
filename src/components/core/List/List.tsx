import { FC, HTMLAttributes } from "react";

import classes from "./List.module.css";

type ListProps = HTMLAttributes<HTMLUListElement>;

const List: FC<ListProps> = ({ children, ...rest }) => {
  return (
    <ul className={classes.list} {...rest}>
      {children}
    </ul>
  );
};

export default List;
