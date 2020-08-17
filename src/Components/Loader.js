import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 26px;
`;

export default () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        🕑
      </span>
    </Container>
  );
};
