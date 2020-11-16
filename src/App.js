import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";

import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
