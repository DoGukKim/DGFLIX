import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Text = styled.span`
  color: red;
`;

const Mesaage = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);
Mesaage.PropsTypes = {
  text: PropsTypes.string.isRequired,
};

export default Mesaage;
