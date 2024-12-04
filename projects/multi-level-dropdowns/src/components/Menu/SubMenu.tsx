import { FC } from "react";

import List from "../core/List";
import ListItem from "../core/ListItem";

interface SubMenuProps {
  menu?: Array<MultiLevelDropdown>;
}

const SubMenu: FC<SubMenuProps> = ({ menu }) => {
  if (!menu) return null;

  return (
    <List>
      {menu.map(({ id, name, children }) => (
        <ListItem key={id}>
          {name}
          <SubMenu menu={children} />
        </ListItem>
      ))}
    </List>
  );
};

export default SubMenu;
