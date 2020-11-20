import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";

import theme from "./styles/theme";

function App() {
  return (
    <ToastProvider
      autoDismiss={true}
      placement="bottom-right"
      autoDismissTimeout={5000}
    >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
