import FeatureMovies from "../components/FeatureMovies";
import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { TABS_TRENDING, TABS_TOP_RATED } from "../libs/constants";

function HomePage() {
  return (
    <div className="mct">
      <Header />
      <FeatureMovies />
      <MediaList mediaTitle="Trending" tabsList={TABS_TRENDING} />
      <MediaList mediaTitle="Top Rated" tabsList={TABS_TOP_RATED} />
    </div>
  );
}

export default HomePage;
