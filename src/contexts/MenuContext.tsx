import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import {
  MC,
  MCP,
  MenuPayload,
  MenuReducer,
  RecursiveAddMenu,
} from "../interfaces/menu-context";
import initialState from "../data/dropdownMenu";

const recursiveAddMenu: RecursiveAddMenu = (menuList, parentID, newMenu) => {
  return menuList.map((menu) => {
    if (menu.id === parentID) {
      return {
        ...menu,
        children: [...(menu?.children ?? []), newMenu],
      };
    } else if (menu.children) {
      return {
        ...menu,
        children: recursiveAddMenu(menu.children, parentID, newMenu),
      };
    } else {
      return menu;
    }
  });
};

const menuReducer: MenuReducer = (state, action) => {
  const { type, payload } = action;
  if (type !== "add" || !payload) return state;
  const { parentID, name } = payload;
  return recursiveAddMenu(state, parentID, { id: v4(), name });
};

const MenuContext = createContext<MC>({ menu: initialState });

export const MenuContextProvider: MCP = ({ children }) => {
  const [menu, dispatch] = useReducer(menuReducer, initialState);
  const addMenu = (menu: MenuPayload) =>
    dispatch({ type: "add", payload: menu });

  return (
    <MenuContext.Provider value={{ menu, addMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
