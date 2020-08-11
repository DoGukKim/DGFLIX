import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: "9734c4d36568d0204a5a22191ecea9df",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
