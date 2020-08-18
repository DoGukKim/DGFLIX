import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";

// styled-components
const Container = styled.main``;
const ContentWarpper = styled.section`
  position: relative;
  height: calc(100vh - 60px);
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.bgImage}) no-repeat center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1440px;
  height: 100%;
`;
const Cover = styled.figure`
  width: 460px;
  height: calc(100% - 160px);
  background: url(${props => props.bgImage}) no-repeat center;
  background-size: cover;
  border-radius: 0.375em;
  z-index: 1;
`;
const Data = styled.div`
  padding: 0 0 0 13px;
  width: calc(100% - 460px);
  height: calc(100% - 160px);
  color: #fff;
  z-index: 1;
`;
const Title = styled.h3`
  font-size: 26px;
  font-weight: 600;
`;
const ItemContainer = styled.div`
  padding: 6px 0 0;
  font-size: 14px;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 14px;
`;
const Overview = styled.p`
  padding: 6px 0 0;
  width: 80%;
  font-size: 13px;
  line-height: 1.6em;
  opacity: 0.6;
`;
const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | DGFLIX</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          {""} | DGFLIX
        </title>
      </Helmet>
      <ContentWarpper>
        <Backdrop
          bgImage={`http://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={`http://image.tmdb.org/t/p/original${result.poster_path}`}
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
          </Data>
        </Content>
      </ContentWarpper>
    </Container>
  );
DetailPresenter.prototype = {
  result: PropsTypes.object,
  error: PropsTypes.string,
  loading: PropsTypes.bool.isRequired,
};
export default DetailPresenter;
