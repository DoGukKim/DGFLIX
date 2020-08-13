import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResult,
  tvResult,
  error,
  loading,
  searchTerm,
  handleSubmit,
}) => {
  return <div></div>;
  SearchPresenter.prototype = {
    movieResult: PropsTypes.array,
    tvResult: PropsTypes.array,
    loading: PropsTypes.bool.isRequired,
    error: PropsTypes.string,
    searchTerm: PropsTypes.string,
    handleSubmit: PropsTypes.func.isRequired,
  };
};

export default SearchPresenter;
