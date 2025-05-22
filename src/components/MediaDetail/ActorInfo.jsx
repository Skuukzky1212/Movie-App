const ActorInfo = ({ name, profilePath }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black shadow-sm">
      <img
        className="w-full"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
      </div>
    </div>
  );
};
export default ActorInfo;
