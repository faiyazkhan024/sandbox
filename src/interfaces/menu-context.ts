import { FC, ReactNode } from "react";

export interface MC {
  menu?: Array<MultiLevelDropdown>;
  addMenu?: (menu: MenuPayload) => void;
}

export type MCP = FC<{ children: ReactNode }>;

export interface MenuPayload {
  name: string;
  parentID: string;
}

export type MenuReducer = (
  state: Array<MultiLevelDropdown>,
  action: {
    type: string;
    payload?: MenuPayload;
  }
) => Array<MultiLevelDropdown>;

export type RecursiveAddMenu = (
  menuList: Array<MultiLevelDropdown>,
  parentID: string,
  newMenu: MultiLevelDropdown
) => Array<MultiLevelDropdown>;
