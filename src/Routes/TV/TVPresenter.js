import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Mesaage from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.main`
  color: #fff;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Show | DGFLIX</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Mesaage text={error} />}
      </Container>
    )}
    ;
  </>
);
TVPresenter.prototype = {
  topRated: PropsTypes.array,
  popular: PropsTypes.array,
  airingToday: PropsTypes.array,
  error: PropsTypes.string,
  loading: PropsTypes.bool.isRequired,
};
export default TVPresenter;
