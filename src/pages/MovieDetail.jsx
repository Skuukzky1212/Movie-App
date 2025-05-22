import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import { CircularProgress } from "@mui/material";
const apiAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    const apiOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiAccessToken}`,
      },
    };
    setIsLoading(true);
    fetch(apiUrl, apiOptions)
      .then(async (res) => {
        if (!res.ok) {
          if (res.status === 404) {
            console.error("Resource not found");
            return;
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => {
        throw new Error("Error here! ", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <>
          <Banner mediaInfo={movieInfo} />
          <div className="bg-black text-[1.2vw] text-white">
            <div className="mx-auto flex max-w-[1300px] gap-6 px-6 py-10">
              <div className="flex-[2]">
                <ActorList actors={movieInfo.credits?.cast || []} />
              </div>
              <div className="flex-1">
                <p className="mb-4 text-[1.4vw] font-bold">Information</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={`${!isLoading && "pointer-events-none opacity-[0!important] delay-1000"} fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-slate-950 opacity-100 transition-all  duration-[0.3s]`}
      >
        <CircularProgress size={80} sx={{ color: "red" }} />
      </div>
    </div>
  );
};
export default MovieDetail;
