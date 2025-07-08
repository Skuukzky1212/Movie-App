import FeatureMovies from "@components/FeatureMovies";
import MediaList from "@components/MediaList";
import { TABS_TRENDING, TABS_TOP_RATED } from "@libs/constants";

function HomePage() {
  return (
    <div className="mct">
      <FeatureMovies />
      <div id="trending">
        <MediaList mediaTitle="Trending" tabsList={TABS_TRENDING} />
      </div>
      <div id="top-rated">
        <MediaList mediaTitle="Top Rated" tabsList={TABS_TOP_RATED} />
      </div>
    </div>
  );
}

export default HomePage;
