export const TABS_TRENDING = [
  {
    id: "all",
    label: "All",
    apiUrl: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    label: "Movie",
    apiUrl: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    label: "TV Show",
    apiUrl: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

export const TABS_TOP_RATED = [
  {
    id: "movie",
    label: "Movie",
    apiUrl: "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
  },
  {
    id: "tv",
    label: "TV Show",
    apiUrl: "https://api.themoviedb.org/3/tv/top_rated?language=en-US",
  },
];
