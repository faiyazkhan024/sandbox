import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";

const useMenu = () => useContext(MenuContext);

export default useMenu;
