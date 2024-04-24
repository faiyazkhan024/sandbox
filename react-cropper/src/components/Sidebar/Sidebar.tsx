import { FC } from "react";

import classes from "./Sidebar.module.css";
import CropData from "../CropData/CropData";

interface SidebarProps {
  preview: string;
  cropData: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

const Sidebar: FC<SidebarProps> = ({ preview, cropData }) => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.preview}>
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <div className="no-preview">No Preview</div>
        )}
      </div>

      <ul className={classes.cropDataList}>
        <CropData parameter="X" value={parseFloat(cropData.x.toFixed(2))} />
        <CropData parameter="Y" value={parseFloat(cropData.y.toFixed(2))} />
        <CropData
          parameter="Width"
          value={parseFloat(cropData.width.toFixed(2))}
        />
        <CropData
          parameter="Height"
          value={parseFloat(cropData.height.toFixed(2))}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
