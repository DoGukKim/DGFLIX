import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => {
  return <div></div>;
  DetailPresenter.prototype = {
    result: PropsTypes.object,
    error: PropsTypes.string,
    loading: PropsTypes.bool.isRequired,
  };
};

export default DetailPresenter;
