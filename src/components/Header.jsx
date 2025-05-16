import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-8">
        <a href="/">
          <img
            className="max-w-28 sp:max-w-16"
            src="./netflix.png"
            alt="logo"
            width={112}
            height={112}
          />
        </a>
        <div className="flex items-center gap-2">
          <a href="#">
            <span>Phim</span>
          </a>
          <a href="#">
            <span>Truyền Hình</span>
          </a>
        </div>
      </div>
      <p className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </p>
    </header>
  );
};
export default Header;
