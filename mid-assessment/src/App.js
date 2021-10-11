import { useState } from "react";

import AppDrawerCustom from "./components/app-drawer-custom.component";
import AppBarCustom from "./components/app-bar-custom.component";
import MainContainer from "./components/main-container.component";

const App = () => {
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);

  const appDrawerState = {
    appDrawerOpen,
    setAppDrawerOpen
  };

  return (
    <>
      <AppDrawerCustom appDrawerState={appDrawerState} />
      <AppBarCustom appDrawerState={appDrawerState} />
      <MainContainer appDrawerOpen={appDrawerOpen} />
    </>
  );
};

export default App;