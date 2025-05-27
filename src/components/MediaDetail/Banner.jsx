import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "@components/CircularProgressBar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import { useEffect } from "react";

const apiUrlImage = import.meta.env.VITE_MOVIE_API_IMAGE_URL;

const Banner = ({ mediaInfo, trailerVideoKey, trailerParam }) => {
  const certification = (
    (mediaInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupedCrews = groupBy(crews, "job");
  const { openPopup } = useModalContext();
  const handleOpenPopup = () => {
    openPopup(
      <iframe
        title="Trailer"
        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
        className="aspect-video w-[50vw]"
      />,
    );
  };
  useEffect(() => {
    if (trailerParam === "open") {
      handleOpenPopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trailerParam, JSON.stringify(handleOpenPopup)]);

  return (
    <div className="relative overflow-hidden text-white">
      <ImageComponent
        className="absolute inset-0 h-full w-full object-cover brightness-[.2]"
        width={600}
        height={900}
        src={
          mediaInfo?.backdrop_path
            ? `${apiUrlImage}${mediaInfo?.backdrop_path}`
            : "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2022/03/Netflix-Blur-copy.jpg"
        }
        placeholderImage="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2022/03/Netflix-Blur-copy.jpg"
      />
      <div className="relative mx-auto flex max-w-[1300px] gap-6 px-6 py-10 pc:gap-12">
        <div className="flex-1">
          <ImageComponent
            src={
              mediaInfo.poster_path
                ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`
                : "https://i.pinimg.com/736x/01/e1/35/01e135a5bcabe81ce279076de8dfbfd9.jpg"
            }
            width={600}
            height={900}
            alt=""
            placeholderImage="https://i.pinimg.com/736x/01/e1/35/01e135a5bcabe81ce279076de8dfbfd9.jpg"
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo?.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{mediaInfo.release_date}</p>
            <p>
              {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(mediaInfo.vote_average * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button onClick={handleOpenPopup}>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{mediaInfo.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
