import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const theme = {
  backgroundColor: "#dfe6e9",
  backgroundColorDark: "#b2bec3",
};

export const darkTheme = {
  backgroundColor: "#636e72",
  backgroundColorDark: "#2d3436",
};

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background: ${(props) =>
          `linear-gradient(${props.theme.backgroundColor}, ${props.theme.backgroundColorDark})`};
    }
`;
