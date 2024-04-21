import { ChangeEvent, useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";

import floorPlan from "./assets/floor-plan.png";
import "cropperjs/dist/cropper.css";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [imgUrl, setImgUrl] = useState(floorPlan);
  const [preview, setPreview] = useState("");
  const [cropData, setCropData] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => setImgUrl(reader.result as string));
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    reader.readAsDataURL(files[0]);
  };

  const onUpload = () => inputRef.current?.click();

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
      <header className="appBar">
        <h1>Image Playground</h1>
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImage}
        />
        <button className="btn" onClick={onUpload}>
          Upload Image
        </button>
      </header>

      <div className="app">
        <main className="canvas">
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

        <aside>
          <div className="preview">
            {preview ? (
              <img src={preview} alt="Preview" />
            ) : (
              <div className="no-preview">No Preview</div>
            )}
          </div>

          <div className="data-group">
            <div className="data">
              <span className="text">X</span>
              <span className="val">{cropData.x.toFixed(2)}</span>
              <span className="text">px</span>
            </div>
            <div className="data">
              <span className="text">Y</span>
              <span className="val">{cropData.y.toFixed(2)}</span>
              <span className="text">px</span>
            </div>
            <div className="data">
              <span className="text">Width</span>
              <span className="val">{cropData.width.toFixed(2)}</span>
              <span className="text">px</span>
            </div>
            <div className="data">
              <span className="text">Height</span>
              <span className="val">{cropData.height.toFixed(2)}</span>
              <span className="text">px</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default App;
