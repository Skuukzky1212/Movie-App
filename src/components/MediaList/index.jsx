import MovieCard from "./MovieCard";

const MediaList = () => {
  return (
    <div className="bg-slate-950 px-8 py-20 text-[1.2vw] text-white">
      <div className="mb-7 flex items-center gap-6">
        <span className="text-[2vw] font-bold">Trending</span>
        <ul className="flex items-center rounded border border-white">
          <li className="cursor-pointer bg-white px-2 py-1 text-black transition-all hover:bg-white hover:text-black">
            All
          </li>
          <li className="cursor-pointer px-2 py-1 transition-all hover:bg-white hover:text-black">
            Movie
          </li>
          <li className="cursor-pointer px-2 py-1 transition-all hover:bg-white hover:text-black">
            TV Show
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MediaList;
