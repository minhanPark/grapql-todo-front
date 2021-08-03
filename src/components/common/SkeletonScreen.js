import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColorDark} 100%,
    transparent 0
  );
`;

const SkeletonScreen = ({ children, isLoading }) => {
  return isLoading ? <Card /> : <>{children}</>;
};

export default SkeletonScreen;
