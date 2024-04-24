import { useRef, ChangeEvent, FC } from "react";
import classes from "./Header.module.css";

interface HeaderProps {
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ setImgUrl }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => setImgUrl(reader.result as string));
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    reader.readAsDataURL(files[0]);
  };

  const onUpload = () => inputRef.current?.click();

  return (
    <header className={classes.appBar}>
      <h1>Image Playground</h1>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImage}
      />
      <button className={classes.btn} onClick={onUpload}>
        Upload Image
      </button>
    </header>
  );
};

export default Header;
