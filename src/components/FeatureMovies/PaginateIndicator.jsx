const PaginateIndicator = ({ moviesData, activeMovieId, setActiveMovieId }) => {
  return (
    <ul className="absolute bottom-8 right-8 flex gap-1.5">
      {moviesData &&
        moviesData.map((item) => (
          <li
            key={item.id}
            className={`h-1.5 w-12 cursor-pointer ${activeMovieId === item.id ? "bg-slate-100" : "bg-slate-600"} `}
            onClick={() => {
              setActiveMovieId(item.id);
            }}
          ></li>
        ))}
    </ul>
  );
};
export default PaginateIndicator;
