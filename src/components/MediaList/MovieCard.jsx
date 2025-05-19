import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="sp:w-[calc(50%-8px)] group  w-[calc(25%-12px)] cursor-pointer overflow-hidden rounded-[10px] border border-slate-800">
      <p className="overflow-hidden">
        <img
          src="https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
          alt=""
          className="aspect-auto w-full  transition-all duration-[0.4s] group-hover:scale-110"
        />
      </p>
      <div className="p-6">
        <CircularProgressBar />
        <p className="mt-2 font-bold">2Nti3gYAX513wvhp8IiLL6ZDyOm</p>
        <p className="text-slate-300">2024-20-20</p>
      </div>
    </div>
  );
};

export default MovieCard;
