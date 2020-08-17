import React from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import styled from "styled-components";

// styled-components
const Container = styled.div``;
const ImgContainer = styled.figure``;
const Img = styled.img``;
const Rating = styled.p``;
const Title = styled.p``;
const Year = styled.p``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImgContainer>
        <Img bgUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {""}
          {rating}/10
        </Rating>
      </ImgContainer>
      <Title>{title}</Title>
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
