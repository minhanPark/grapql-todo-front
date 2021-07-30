import React from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client } from "./client";
import { GlobalStyle, theme, darkTheme } from "./style/Common";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import { isDarkModeVar } from "./client";

const Title = styled.h1`
  font-size: 60px;
  color: red;
`;

const Container = styled.div``;

function App() {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <GlobalStyle />
        <Container>
          <Title>sdsdsdsdsdsd</Title>
        </Container>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
