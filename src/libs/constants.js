const apiHost = import.meta.env.VITE_MOVIE_API_HOST;
export const TABS_TRENDING = [
  {
    id: "all",
    label: "All",
    apiUrl: `${apiHost}/trending/all/day?language=en-US`,
  },
  {
    id: "movie",
    label: "Movie",
    apiUrl: `${apiHost}/trending/movie/day?language=en-US`,
  },
  {
    id: "tv",
    label: "TV Show",
    apiUrl: `${apiHost}/trending/tv/day?language=en-US`,
  },
];

export const TABS_TOP_RATED = [
  {
    id: "movie",
    label: "Movie",
    apiUrl: `${apiHost}/movie/top_rated?language=en-US`,
  },
  {
    id: "tv",
    label: "TV Show",
    apiUrl: `${apiHost}/tv/top_rated?language=en-US`,
  },
];
