import React from "react";
import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { toggleDarkMode, isDarkModeVar } from "../client";

const Container = styled.div`
  padding: 8px;
`;

const Top = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  visibility: hidden;
  &:checked + label {
    transform: rotate(360deg);
    background-color: ${(props) => props.theme.fontColorBasic};
    &:before {
      transform: translateX(45px);
      background-color: ${(props) => props.theme.backgroundColor};
    }
  }
`;

const Label = styled.label`
  width: 90px;
  height: 45px;
  border: 4px solid ${(props) => props.theme.fontColorBasic};
  border-radius: 99em;
  position: relative;
  transition: transform 0.75s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;

  &:before {
    transition: transform 0.75s ease;
    transition-delay: 0.5s;
    content: "";
    display: block;
    position: absolute;
    width: 27px;
    height: 27px;
    background-color: ${(props) => props.theme.fontColorBasic};
    border-radius: 50%;
    top: 5px;
    left: 5px;
  }
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
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <Container>
      <Top>
        <Input
          type="checkbox"
          id="darkModeToggle"
          defaultChecked={isDarkMode}
        />
        <Label htmlFor="darkModeToggle" onClick={() => toggleDarkMode()} />
      </Top>
      <Text>
        Copyright&copy; {new Date().getFullYear()} RunningWater All rights
        reserved
      </Text>
    </Container>
  );
};

export default Footer;
