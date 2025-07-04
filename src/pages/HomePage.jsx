import FeatureMovies from "@components/FeatureMovies";
import MediaList from "@components/MediaList";
import { TABS_TRENDING, TABS_TOP_RATED } from "@libs/constants";

function HomePage() {
  return (
    <div className="mct">
      <FeatureMovies />
      <MediaList
        idAnc="trending"
        mediaTitle="Trending"
        tabsList={TABS_TRENDING}
      />
      <MediaList
        idAnc="top-rated"
        mediaTitle="Top Rated"
        tabsList={TABS_TOP_RATED}
      />
    </div>
  );
}

export default HomePage;
