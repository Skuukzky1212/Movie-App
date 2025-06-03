import useFetch from "@hooks/useFetch";
import { apiHost } from "@libs/constants";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { dataFetched: genresList } = useFetch(
    {
      apiUrl: `${apiHost}/genre/${mediaType === "movie" ? "movie" : "tv"}/list`,
    },
    { enabled: mediaType },
  );

  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);
  return (
    <div className="flex flex-wrap gap-1">
      {genresList &&
        genresList?.genres?.map((genre) => (
          <p
            key={genre.id}
            className={`cursor-pointer rounded-lg border px-2 py-1 transition-all hover:bg-black hover:text-white ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = newValue.filter((g) => g !== genre.id);
              } else {
                newValue = [...newValue, genre.id];
              }
              onChange(newValue);
            }}
          >
            {genre.name}
          </p>
        ))}
    </div>
  );
};
export default GenresInput;
