import React from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import styled from "styled-components";

// styled-components
const Container = styled.div``;

const Img = styled.figure`
  background: url(${props => `http://image.tmdb.org/t/p/w300${props.bgUrl}`})
    no-repeat center;
  background-size: cover;
  border-radius: 0.375em;
  height: 180px;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.5;
  }
`;
const Rating = styled.p`
  margin: 6px 0 0;
`;
const Title = styled.p``;
const Year = styled.p`
  font-size: 12px;
  color: rgba(225, 225, 225, 0.6);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <Img bgUrl={imageUrl} />
      <Rating>
        <span role="img" aria-label="rating">
          ⭐
        </span>
        {rating}/10
      </Rating>
      <Title>
        {title.length > 15 ? `${title.substring(0, 20)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
Poster.propsTypes = {
  id: PropsTypes.number.isRequired,
  imageUrl: PropsTypes.string,
  title: PropsTypes.string.isRequired,
  rating: PropsTypes.number,
  year: PropsTypes.string,
  isMovie: PropsTypes.bool,
};
export default Poster;
