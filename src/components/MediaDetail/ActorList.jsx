import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div className="mb-8">
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-4 gap-4 sp:grid-cols-2">
        {currentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
          />
        ))}
      </div>
      <p
        className="mt-6 text-center"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        <span className="cursor-pointer underline transition-all hover:no-underline hover:opacity-50">
          {isShowMore ? "Show Less" : "Show All"}
        </span>
      </p>
    </div>
  );
};
export default ActorList;
