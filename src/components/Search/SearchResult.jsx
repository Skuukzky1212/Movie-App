import MovieCard from "@components/MovieCard";

const SearchResult = ({ media_type, searchResult }) => {
  return (
    <div className="flex-1 break-all">
      {searchResult && (
        <div className="flex flex-wrap items-start justify-center gap-4">
          {searchResult.map((item) => (
            <MovieCard key={item.id} movieData={{ ...item, media_type }} />
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchResult;
