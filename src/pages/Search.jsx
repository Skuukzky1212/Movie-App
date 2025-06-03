import SearchForm from "@components/Search/SearchForm";
import SearchResult from "@components/Search/SearchResult";

const Search = () => {
  return (
    <div className="mx-auto mt-5 w-[calc(100%-40px)] max-w-[1300px]">
      <p className="mb-2 px-1 text-[20px] font-bold uppercase">Search page</p>
      <div className="flex items-start">
        <SearchForm />
        <SearchResult />
      </div>
    </div>
  );
};
export default Search;
