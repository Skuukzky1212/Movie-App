import { useParams, useSearchParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

import { apiHost } from "@libs/constants";

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
    </div>
  );
};
export default MovieDetail;
