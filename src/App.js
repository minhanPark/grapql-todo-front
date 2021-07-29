import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { GlobalStyle, theme, darkTheme } from "./style/Common";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";

const Title = styled.h1`
  font-size: 60px;
  color: red;
`;

const Container = styled.div``;

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
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
