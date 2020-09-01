import React from "react";
import "./";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { MortgageCalculator } from "./features";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MortgageCalculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
