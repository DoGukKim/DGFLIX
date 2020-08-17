import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.main`
  color: #fff;
`;
const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <span>{movie.title}</span>
          ))}
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
