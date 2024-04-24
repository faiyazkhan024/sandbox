import { FC } from "react";

import classes from "./CropData.module.css";

interface CropDataProps {
  parameter: string;
  value: number;
}

const CropData: FC<CropDataProps> = ({ parameter, value }) => {
  return (
    <li className={classes.cropData}>
      <span className={classes.text}>{parameter}</span>
      <span className={classes.val}>{value}</span>
      <span className={classes.text}>px</span>
    </li>
  );
};

export default CropData;
