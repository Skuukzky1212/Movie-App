import SearchForm from "@components/Search/SearchForm";

const Search = () => {
  return (
    <div className="mx-auto mt-5 w-[calc(100%-40px)] max-w-[1300px]">
      <p className="text-bold text-[24px] ">Search</p>
      <div className="flex items-start">
        {/* form */}
        <div className="sticky top-0 w-[30%]">
          <SearchForm />
        </div>
        {/* Container */}
        <div className="flex-1">result</div>
      </div>
    </div>
  );
};
export default Search;
