import { useState } from "react";
import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";

const MediaList = ({ idAnc, mediaTitle, tabsList }) => {
  const [activeTabId, setActiveTabId] = useState(
    (tabsList && tabsList[0]?.id) || "",
  );

  const apiUrl = tabsList?.find((tab) => tab.id === activeTabId)?.apiUrl;
  const { dataFetched: mediaDataResponse } = useFetch({
    apiUrl: apiUrl,
  });

  const mediaData = mediaDataResponse?.results || [];

  return (
    <div id={idAnc} className="bg-slate-950 px-8 py-20 text-[1.2vw] text-white">
      <div className="mb-7 flex items-center gap-6">
        <span className="text-[2vw] font-bold">{mediaTitle}</span>
        <ul className="flex items-center rounded border border-white">
          {tabsList &&
            tabsList.map((tab) => (
              <li
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                }}
                className={`cursor-pointer ${tab.id === activeTabId ? "bg-white text-black" : ""} px-2 py-1  transition-all hover:bg-white hover:text-black`}
              >
                {tab.label}
              </li>
            ))}
        </ul>
      </div>
      {mediaData && (
        <div className="flex flex-wrap items-start justify-center gap-4">
          {mediaData.map((item) => (
            <MovieCard
              key={item.id}
              movieData={item}
              activeTabId={activeTabId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaList;
