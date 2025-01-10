import { FC } from "react";
import AppBar from "./components/AppBar";
import { MenuContextProvider } from "./contexts/MenuContext";

const App: FC = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <MenuContextProvider>
          <div></div>
        </MenuContextProvider>
      </main>
    </>
  );
};

export default App;
