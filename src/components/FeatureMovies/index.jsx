import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
const apiAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;
const FeatureMovies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const optionsFetchDatas = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiAccessToken}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      optionsFetchDatas,
    )
      .then(async (res) => {
        const data = await res.json();
        const popularMovies = data.results && data.results.slice(0, 4);
        setMoviesData(popularMovies);
        setActiveMovieId(popularMovies[0].id);
      })
      .catch((err) => {
        throw new Error("Error here! " + err);
      });
  }, []);

  const activeMovieData = moviesData.filter(
    (movie) => movie.id === activeMovieId,
  );
  return (
    <div className="relative max-h-[calc(100vh-56px)] overflow-hidden">
      {activeMovieData && (
        <Movie key={activeMovieData.id} activeMovieData={activeMovieData} />
      )}

      <PaginateIndicator
        moviesData={moviesData}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;
