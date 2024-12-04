import { v4 } from "uuid";

const DROPDOWN_MENU: Array<MultiLevelDropdown> = [
  { id: v4(), name: "Home Page" },
  {
    id: v4(),
    name: "Left Dropdown",
    children: [
      { id: v4(), name: "LD Page 1" },
      {
        id: v4(),
        name: "LD Second Level",
        children: [
          { id: v4(), name: "LD SL Page 1" },
          { id: v4(), name: "LD SL page 2" },
          {
            id: v4(),
            name: "LD Third Level",
            children: [
              { id: v4(), name: "LD TL Page 1" },
              {
                id: v4(),
                name: "LD Fourth Level",
                children: [
                  { id: v4(), name: "LD FL Page 1" },
                  { id: v4(), name: "LD FL Page 2" },
                  { id: v4(), name: "LD FL Page 3" },
                  { id: v4(), name: "LD FL Page 4" },
                  { id: v4(), name: "LD FL Page 5" },
                ],
              },
              { id: v4(), name: "LD TL Page 2" },
            ],
          },
          { id: v4(), name: "LD SL Page 3" },
        ],
      },
      { id: v4(), name: "LD Page 2" },
      { id: v4(), name: "LD Page 3" },
    ],
  },
  {
    id: v4(),
    name: "Middle Dropdown",
    children: [
      { id: v4(), name: "Middle Page 1" },
      {
        id: v4(),
        name: "MD Second Level",
        children: [
          { id: v4(), name: "MD SL Page 1" },
          { id: v4(), name: "MD SL Page 2" },
          { id: v4(), name: "MD SL Page 3" },
        ],
      },
    ],
  },
  { id: v4(), name: "About Us" },
  {
    id: v4(),
    name: "Right Dropdown",
    children: [
      { id: v4(), name: "RD Page 1" },
      { id: v4(), name: "RD Page 2" },
      {
        id: v4(),
        name: "RD Second Level",
        children: [
          { id: v4(), name: "RD SL Page 1" },
          { id: v4(), name: "RD SL Page 2" },
          { id: v4(), name: "RD SL Page 3" },
          { id: v4(), name: "RD SL Page 4" },
          { id: v4(), name: "RD SL Page 5" },
          { id: v4(), name: "RD SL Page 6" },
        ],
      },
      { id: v4(), name: "RD Page 3" },
      { id: v4(), name: "RD Page 4" },
    ],
  },
  { id: v4(), name: "Contact Us" },
];

export default DROPDOWN_MENU;
