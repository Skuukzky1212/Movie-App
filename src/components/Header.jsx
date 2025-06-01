import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-8">
        <Link to="/">
          <ImageComponent
            className="max-w-28 sp:max-w-16"
            src="/netflix.png"
            alt="logo"
            width={112}
            height={112}
          />
        </Link>
        <div className="flex items-center gap-2">
          <a href="/#trending">
            <span>Trending</span>
          </a>
          <a href="/#top-rated">
            <span>Top Rated</span>
          </a>
        </div>
      </div>
      <Link to={"/search/"} className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
    </header>
  );
};
export default Header;
