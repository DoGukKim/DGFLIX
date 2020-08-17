import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.main`
  color: #fff;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show => show.name)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => show.name)}
        </Section>
      )}
    </Container>
  );
TVPresenter.prototype = {
  topRated: PropsTypes.array,
  popular: PropsTypes.array,
  airingToday: PropsTypes.array,
  error: PropsTypes.string,
  loading: PropsTypes.bool.isRequired,
};
export default TVPresenter;
