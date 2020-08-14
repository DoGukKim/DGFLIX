import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.main`
  color: #fff;
`;
const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">{upcoming.map(movie => movie.title)}</Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );

HomePresenter.prototype = {
  nowPlaying: PropsTypes.array,
  popular: PropsTypes.array,
  upcoming: PropsTypes.array,
  error: PropsTypes.string,
  loading: PropsTypes.bool.isRequired,
};

export default HomePresenter;
