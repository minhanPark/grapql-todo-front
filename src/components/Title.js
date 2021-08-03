import React from "react";
import styled from "styled-components";
import SkeletonScreen from "./common/SkeletonScreen";

const Container = styled.div`
  min-height: 50px;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const HeaderContainer = styled.div`
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 14px 18px;
`;

const Title = () => {
  return (
    <Container>
      <SkeletonScreen isLoading={true}>
        <HeaderContainer>
          <Header>Graph QL 투두 리스트</Header>
        </HeaderContainer>
      </SkeletonScreen>
    </Container>
  );
};

export default Title;
