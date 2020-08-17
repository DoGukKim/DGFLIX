import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const Container = styled.section`
  padding: 16px 20px;
`;
const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 30px;
  margin: 0px 0 0 0;
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
