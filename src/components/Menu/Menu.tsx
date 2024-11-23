import { FC } from "react";

import SubMenu from "./SubMenu";
import List from "../core/List";
import ListItem from "../core/ListItem";
import useMenu from "../../hooks/useMenu";

import classes from "./Menu.module.css";

const Menu: FC = () => {
  const { menu } = useMenu();

  if (!menu) return null;

  return (
    <nav className={classes.nav}>
      <List>
        {menu?.map(({ id, name, children }) => (
          <ListItem key={id}>
            {name}
            <SubMenu menu={children} />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Menu;
