import { FC } from "react";

import AppBar from "src/components/AppBar";
import Form from "src/components/Form";
import Menu from "src/components/Menu";
import { MenuContextProvider } from "src/contexts/MenuContext";

const App: FC = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <MenuContextProvider>
          <Form />
          <Menu />
        </MenuContextProvider>
      </main>
    </>
  );
};

export default App;
