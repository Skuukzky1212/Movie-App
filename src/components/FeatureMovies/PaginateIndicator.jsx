import { useRef, useEffect } from "react";

const PaginateIndicator = ({ moviesData, activeMovieId, setActiveMovieId }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleClick = (id) => {
    // Clear any previous timeout before setting a new one
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActiveMovieId(id);
    }, 2000);
  };

  return (
    <ul className="absolute bottom-8 right-8 flex gap-1.5">
      {moviesData?.map((item) => (
        <li
          key={item.id}
          className={`h-1.5 w-12 cursor-pointer ${activeMovieId === item.id ? "bg-slate-100" : "bg-slate-600"}`}
          onClick={() => handleClick(item.id)}
        ></li>
      ))}
    </ul>
  );
};

export default PaginateIndicator;
