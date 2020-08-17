import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const Container = styled.section`
  :not(:last-child) {
    margin: 0 0 24px;
  }
  padding: 0 20px;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  grid-gap: 16px;
  margin: 24px 0 0 0;
  font-size: 14px;
`;
const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.PropsTypes = {
  title: PropsTypes.string.isRequired,
  chlidren: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]),
};

export default Section;
