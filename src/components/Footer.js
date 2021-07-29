import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px;
`;
const Text = styled.h3`
  padding: 6px;
  border-top: 2px solid ${(props) => props.theme.fontColorBasic};
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColorBasic};
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        Copyright&copy; {new Date().getFullYear()} RunningWater All rights
        reserved
      </Text>
    </Container>
  );
};

export default Footer;
