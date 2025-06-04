import { Link } from "react-router-dom";
import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";

const apiUrlImage = import.meta.env.VITE_MOVIE_API_IMAGE_URL;

const MovieCard = ({
  movieData: {
    id,
    poster_path,
    original_name,
    first_air_date,
    original_title,
    vote_average,
    release_date,
    media_type,
  },
  activeTabId,
}) => {
  const tvShowLabel = media_type || activeTabId;
  return (
    <Link
      to={`/movie/${id}/`}
      className={` leading-[100%] self-stretch group relative flex h-full w-[calc(25%-12px)] cursor-pointer flex-col overflow-hidden rounded-[10px] border border-slate-800 sp:w-[calc(50%-8px)] ${tvShowLabel && tvShowLabel === "tv" && "pointer-events-none"}`}
    >
      {tvShowLabel && tvShowLabel === "tv" && (
        <p className="absolute right-0 top-0 z-20 rounded-bl-[10px] bg-white px-4 py-2 text-[16px] font-bold text-slate-900 shadow-md">
          TV show
        </p>
      )}
      <p className="overflow-hidden">
        <ImageComponent
          src={`${apiUrlImage}${poster_path}`}
          width={210}
          height={300}
          alt={original_title}
          className="aspect-auto w-full transition-all duration-[0.4s] group-hover:scale-110"
        />
      </p>
      <div className="relative flex-1 px-6 py-[2vw]">
        <div className="absolute top-[-1.5vw]">
          <CircularProgressBar percent={Math.round(vote_average * 10)} />
        </div>
        <p className="my-3 line-clamp-2 break-words font-bold">
          {original_title || original_name}
        </p>
        <p className="text-slate-300">{release_date || first_air_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
