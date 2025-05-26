import ImageComponent from "@components/ImageComponent";

const ActorInfo = ({ name, profilePath }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponent
        className="w-full"
        width={276}
        height={350}
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
      />
      <div className="p-3">
        <p className="text-center font-bold">{name}</p>
      </div>
    </div>
  );
};
export default ActorInfo;
