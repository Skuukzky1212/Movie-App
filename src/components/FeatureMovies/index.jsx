import { useEffect, useState, useRef } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";
const apiHost = import.meta.env.VITE_MOVIE_API_HOST;

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const animateFadeUpRefs = useRef([]);
  const animateBackdropRef = useRef();

  const { dataFetched: popularMovies } = useFetch({
    apiUrl: `${apiHost}/movie/popular?language=en-US&page=1`,
  });

  const moviesData =
    (popularMovies.results && popularMovies.results.slice(0, 4)) || [];

  useEffect(() => {
    setActiveMovieId(moviesData[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(moviesData)]);

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
