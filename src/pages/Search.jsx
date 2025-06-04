import SearchForm from "@components/Search/SearchForm";
import SearchResult from "@components/Search/SearchResult";
import useFetch from "@hooks/useFetch";
import { apiHost } from "@libs/constants";
import { useState } from "react";

const Search = () => {
  const [searchFormValue, setSearchFormValue] = useState({
    mediaType: "movie",
    genres: [],
    rating: "all",
  });

  const [minRating, maxRating] =
    searchFormValue.rating === "all"
      ? [0, 100]
      : searchFormValue.rating.split("-");

  const { dataFetched: searchResult } = useFetch({
    apiUrl: `${apiHost}/discover/${searchFormValue?.mediaType}?sort_by=popularity.desc&with_genres=${searchFormValue?.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });
  return (
    <div className="mx-auto my-5  w-[calc(100%-40px)] max-w-[1300px]">
      <p className="mb-2 px-1 text-[20px] font-bold uppercase">Search page</p>
      <div className="flex items-start">
        <SearchForm setSearchFormValue={setSearchFormValue} />
        <SearchResult
          media_type={searchFormValue.mediaType}
          searchResult={searchResult.results || []}
        />
      </div>
    </div>
  );
};
export default Search;
