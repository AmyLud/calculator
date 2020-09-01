import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { MortgageCalculator } from "./features";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MortgageCalculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
