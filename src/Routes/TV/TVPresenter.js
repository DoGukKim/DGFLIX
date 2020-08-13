import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return <div></div>;
  TVPresenter.prototype = {
    topRated: PropsTypes.array,
    popular: PropsTypes.array,
    airingToday: PropsTypes.array,
    error: PropsTypes.string,
    loading: PropsTypes.bool.isRequired,
  };
};

export default TVPresenter;
