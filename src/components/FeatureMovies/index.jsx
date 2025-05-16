import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
const FeatureMovies = () => {
  return (
    <div className="relative max-h-[calc(100vh-56px)] overflow-hidden">
      <Movie />
      <PaginateIndicator />
    </div>
  );
};
export default FeatureMovies;
