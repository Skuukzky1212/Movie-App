import FeatureMovies from "@components/FeatureMovies";
import MediaList from "@components/MediaList";
import { TABS_TRENDING, TABS_TOP_RATED } from "@libs/constants";

function HomePage() {
  return (
    <div className="mct">
      <FeatureMovies />
      <MediaList mediaTitle="Trending" tabsList={TABS_TRENDING} />
      <MediaList mediaTitle="Top Rated" tabsList={TABS_TOP_RATED} />
    </div>
  );
}

export default HomePage;
