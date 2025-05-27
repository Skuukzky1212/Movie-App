import { useParams, useSearchParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import { CircularProgress } from "@mui/material";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const apiHost = import.meta.env.VITE_MOVIE_API_HOST;

const MovieDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const trailerParam = searchParams.get("trailer");
  const { dataFetched: movieInfo, isLoading } = useFetch({
    apiUrl: `${apiHost}/movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  return (
    <div>
      {!isLoading && (
        <>
          <Banner
            mediaInfo={movieInfo}
            trailerVideoKey={
              (movieInfo.videos?.results || []).find(
                (video) => video.type === "Trailer",
              )?.key
            }
            trailerParam={trailerParam}
          />
          <div className="bg-black text-[1.2vw] text-white">
            <div className="mx-auto flex max-w-[1300px] gap-8 px-6 py-10">
              <div className="flex-[2]">
                <ActorList actors={movieInfo.credits?.cast || []} />
              </div>
              <div className="flex-1">
                <MovieInformation movieInfo={movieInfo} />
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={`${!isLoading && "pointer-events-none opacity-[0!important] delay-500"} fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-slate-950 opacity-100 transition-all  duration-[0.3s]`}
      >
        <CircularProgress size={80} sx={{ color: "red" }} />
      </div>
    </div>
  );
};
export default MovieDetail;
