import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.color.neutral.darkest};
  }
`;

export default {
  spacing: {
    xxsmall: "0.25rem",
    xsmall: "0.5rem",
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "2.5rem",
    xxxlarge: "3rem",
  },
  color: {
    primary: {
      lightest: "#6ACFF1",
      light: "#1190BB",
      medium: "#0C6583",
      dark: "#073A4B",
    },
    secondary: {
      light: "#F6E38D",
      medium: "#F3D653",
      dark: "#E5BE10",
    },
    neutral: {
      white: "#FFFFFF",
      lightest: "#F5F5F5",
      light: "#CCCCCC",
      medium: "#858585",
      dark: "#474747",
      darkest: "#292929",
      black: "#000000",
    },
  },
};
