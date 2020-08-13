import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "9734c4d36568d0204a5a22191ecea9df";
const LANGUAGE = "ko-KR";
const api = axios.create({
  baseURL: BASE_URL,
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  upcoming: () =>
    api.get("movie/upcoming", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  popular: () =>
    api.get("movie/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
};
export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  popular: () =>
    api.get("/tv/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  airingToday: () =>
    api.get("tv/airing_today", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
};
