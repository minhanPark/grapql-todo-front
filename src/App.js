import React from "react";
import { GlobalStyle } from "./style/Common";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  color: red;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Title>sdsdsdsdsdsd</Title>
      </div>
    </React.Fragment>
  );
}

export default App;
