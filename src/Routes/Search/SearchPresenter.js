import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Mesaage from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.main`
  color: #fff;
`;
const Form = styled.form`
  margin: 20px 0;
  padding: 0px 20px;
`;
const Input = styled.input`
  width: 100%;
  all: unset;
  font-size: 21px;
`;
const SearchPresenter = ({
  movieResult,
  tvResult,
  loading,
  error,
  searchTerm,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | DGFLIX</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="Movie Results">
            {movieResult.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="TV Shows Results">
            {tvResult.map(show => (
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
        {tvResult &&
          movieResult &&
          tvResult.length === 0 &&
          movieResult.length === 0 && <Mesaage text="Nothing Found..!" />}
      </>
    )}
  </Container>
);
SearchPresenter.prototype = {
  movieResult: PropsTypes.array,
  tvResult: PropsTypes.array,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
  searchTerm: PropsTypes.string,
  handleSubmit: PropsTypes.func.isRequired,
  updateTerm: PropsTypes.func.isRequired,
};
export default SearchPresenter;
