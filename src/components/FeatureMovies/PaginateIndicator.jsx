const PaginateIndicator = ({
  moviesData,
  activeMovieId,
  setActiveMovieId,
  animateFadeUpRefs,
  animateBackdropRef,
}) => {
  const handleClick = (id) => {
    animateFadeUpRefs.current.forEach((el) => {
      if (el) {
        el?.classList.add("pagi-clicked");
        animateBackdropRef.current?.classList.add("pagi-clicked");
      }
    });
    setActiveMovieId(id);
  };

  return (
    <ul className="absolute bottom-8 right-8 flex gap-1.5">
      {moviesData?.map((item) => (
        <li
          key={item.id}
          className={`h-2 w-12 cursor-pointer ${activeMovieId === item.id ? "bg-slate-100" : "bg-slate-600"}`}
          onClick={() => handleClick(item.id)}
        ></li>
      ))}
    </ul>
  );
};

export default PaginateIndicator;
