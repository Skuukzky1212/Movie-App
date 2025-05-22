import { useState } from "react";
import MovieCard from "@components/MovieCard";
import { useEffect } from "react";

const apiAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;

const MediaList = ({ mediaTitle, tabsList }) => {
  const [mediaData, setMediaData] = useState([]);
  const [activeTabId, setActiveTabId] = useState(
    (tabsList && tabsList[0]?.id) || "",
  );
  useEffect(() => {
    const apiUrl = tabsList?.find((tab) => tab.id === activeTabId)?.apiUrl;
    if (!apiUrl) return false;
    const apiOption = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiAccessToken}`,
      },
    };
    fetch(apiUrl, apiOption)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed Fetch data!");
        }
        const dataResponse = await res.json();
        setMediaData(dataResponse?.results);
      })
      .catch((err) => {
        console.log("Error catch: ", err);
      });
  }, [activeTabId, tabsList]);

  return (
    <div className="bg-slate-950 px-8 py-20 text-[1.2vw] text-white">
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
