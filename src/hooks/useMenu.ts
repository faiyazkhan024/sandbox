import { useContext } from "react";
import MenuContext from "src/contexts/MenuContext";

export const useMenu = () => useContext(MenuContext);
