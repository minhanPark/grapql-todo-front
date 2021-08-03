import React from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client } from "./client";
import { GlobalStyle, theme, darkTheme } from "./style/Common";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Title from "./components/Title";
import { isDarkModeVar } from "./client";

function App() {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <GlobalStyle />
        <Title />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
