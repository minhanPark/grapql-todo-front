import React from "react";
import { GlobalStyle, theme, darkTheme } from "./style/Common";
import styled, { ThemeProvider } from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  color: red;
`;

const Container = styled.div``;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Title>sdsdsdsdsdsd</Title>
      </Container>
    </ThemeProvider>
  );
}

export default App;
