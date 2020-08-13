import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => {
  return <div></div>;
  HomePresenter.prototype = {
    nowPlaying: PropsTypes.array,
    popular: PropsTypes.array,
    upcoming: PropsTypes.array,
    error: PropsTypes.string,
    loading: PropsTypes.bool.isRequired,
  };
};

export default HomePresenter;
