import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Movie = () => {
  return (
    <div>
      <p className="h-full">
        <img
          src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
          alt=""
          className="aspect-video object-cover brightness-50"
        />
      </p>
      <div className="absolute bottom-0 left-8 top-0 m-auto flex w-1/3 flex-col justify-center text-white sp:w-1/2">
        <p className="mb-2 font-bold pc:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="mb-2 inline-block border border-gray-400 p-1 text-[1vw] text-gray-400">
            PG13
          </p>
          <p className="mb-4 text-[1vw]">2024-06-11</p>
        </div>
        <div>
          <div className="text-[1.2vw] sp:hidden">
            <p className="mb-2 font-bold">Overview</p>
            <p className="mb-4">
              Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.
            </p>
          </div>
          <div className="flex items-center">
            <button className="group relative mr-6 inline-flex cursor-pointer items-center justify-center gap-1 rounded-[4px] border-[2px] border-transparent bg-white px-6 py-2 pl-9 text-[14px] text-black transition-all duration-[0.3s] hover:border-white hover:bg-transparent">
              <i className="absolute bottom-0 left-[20px] top-0 z-[1] m-auto h-[20px] w-[10px] opacity-100 transition-all duration-[0.3s] group-hover:opacity-0">
                <FontAwesomeIcon icon={faPlay} />
              </i>
              <i className="hover: absolute bottom-0 left-[20px] top-0 z-[1] m-auto h-[20px] w-[10px] opacity-0 transition-all duration-[0.3s] group-hover:opacity-100">
                <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
              </i>
              <span className="transition-all duration-[0.3s] group-hover:text-white">
                Trailer
              </span>
            </button>
            <button className="cursor-pointer text-[14px] transition-all duration-[0.3s] hover:opacity-50">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
