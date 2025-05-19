import { useEffect, useState, useRef } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const apiAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;
const FeatureMovies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const animateFadeUpRefs = useRef([]);
  const animateBackdropRef = useRef();
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

  useEffect(() => {
    const getMovieIdByIndex = (indexInput) => {
      return moviesData[indexInput]?.id;
    };
    const autoplay = setInterval(() => {
      let curSliderIndex;
      let moviesDataLength = moviesData.length;
      moviesData &&
        moviesData.map((item, index) => {
          if (item.id === activeMovieId) {
            curSliderIndex = index;
          }
          if (curSliderIndex < moviesDataLength - 1) {
            setActiveMovieId(getMovieIdByIndex(curSliderIndex + 1));
          } else {
            setActiveMovieId(getMovieIdByIndex(0));
          }
        });
    }, 6000);
    return () => clearInterval(autoplay);
  });

  const activeMovieData = moviesData?.filter(
    (movie) => movie.id === activeMovieId,
  );

  return (
    <div className="relative max-h-[calc(100vh-56px)] overflow-hidden">
      {activeMovieData && (
        <Movie
          key={activeMovieData.id}
          activeMovieData={activeMovieData}
          animateFadeUpRefs={animateFadeUpRefs}
          animateBackdropRef={animateBackdropRef}
        />
      )}

      <PaginateIndicator
        moviesData={moviesData}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
        animateFadeUpRefs={animateFadeUpRefs}
        animateBackdropRef={animateBackdropRef}
      />
    </div>
  );
};
export default FeatureMovies;
