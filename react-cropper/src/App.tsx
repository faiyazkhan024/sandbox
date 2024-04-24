import { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import floorPlan from "./assets/floor-plan.png";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";

const App = () => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [imgUrl, setImgUrl] = useState(floorPlan);
  const [preview, setPreview] = useState("");
  const [cropData, setCropData] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (typeof cropper === "undefined") return;
    setPreview(cropper.getCroppedCanvas()?.toDataURL());
    setCropData({
      ...cropper.getData(),
    });
  };

  return (
    <>
      <Header setImgUrl={setImgUrl} />

      <div className={classes.app}>
        <main className={classes.canvas}>
          <Cropper
            ref={cropperRef}
            src={imgUrl}
            crop={onCrop}
            viewMode={1}
            guides={false}
            dragMode="move"
            minCropBoxWidth={100}
            minCropBoxHeight={100}
            initialAspectRatio={5 / 2}
            checkOrientation={false}
          />
        </main>

        <Sidebar preview={preview} cropData={cropData} />
      </div>
    </>
  );
};

export default App;
