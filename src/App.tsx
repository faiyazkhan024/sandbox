import { FC, useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import floorPlan from "./assets/floor-plan.png";
import { Header } from "./components/Header/Header";
import classes from "./App.module.css";

export const App: FC = () => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [imgUrl, setImgUrl] = useState(floorPlan);

  return (
    <>
      <Header setImgUrl={setImgUrl} />

      <div className={classes.app}>
        <main className={classes.canvas}>
          <Cropper
            ref={cropperRef}
            src={imgUrl}
            viewMode={1}
            guides={false}
            dragMode="move"
            minCropBoxWidth={100}
            minCropBoxHeight={100}
            initialAspectRatio={5 / 2}
            checkOrientation={false}
          />
        </main>
      </div>
    </>
  );
};
