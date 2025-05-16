import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="mct">
      <header className="flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-8">
          <a href="/">
            <img
              className="sp:max-w-16 max-w-28"
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
      <div className="relative max-h-[calc(100vh-56px)] overflow-hidden">
        <p className="h-full">
          <img
            src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
            alt=""
            className="aspect-video object-cover brightness-50"
          />
        </p>
        <div className="sp:w-1/2 absolute bottom-0 left-8 top-0 m-auto flex w-1/3 flex-col justify-center text-white">
          <p className="pc:text-[2vw] mb-2 font-bold">Inside Out 2</p>
          <div>
            <p className="mb-2 inline-block border border-gray-400 p-1 text-[1vw] text-gray-400">
              PG13
            </p>
            <p className="mb-4 text-[1vw]">2024-06-11</p>
          </div>
          <div>
            <div className="sp:hidden text-[1.2vw]">
              <p className="mb-2 font-bold">Overview</p>
              <p className="mb-4">
                Teenager Riley&apos;s mind headquarters is undergoing a sudden
                demolition to make room for something entirely unexpected: new
                Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long
                been running a successful operation by all accounts, aren’t sure
                how to feel when Anxiety shows up. And it looks like she’s not
                alone.
              </p>
            </div>
            <div className="flex items-center">
              <button className="group relative mr-6 inline-flex cursor-pointer items-center justify-center gap-1 rounded-[4px] bg-white px-6 py-2 pl-9 text-[14px] text-black transition-all duration-[0.2s] hover:bg-transparent">
                <i className="absolute bottom-0 left-[20px] top-0 z-[1] m-auto h-[20px] w-[10px] opacity-100 transition-all duration-[0.3s] group-hover:opacity-0">
                  <FontAwesomeIcon icon={faPlay} />
                </i>
                <i className="hover: absolute bottom-0 left-[20px] top-0 z-[1] m-auto h-[20px] w-[10px] opacity-0 transition-all duration-[0.3s] group-hover:opacity-100">
                  <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
                </i>
                <span className="transition-all duration-[0.3s] group-hover:text-white">
                  Trailer
                </span>
              </button>
              <button className="cursor-pointer text-[14px] transition-all duration-[0.3s] hover:opacity-50">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <ul className="absolute bottom-5 right-5 flex gap-1.5">
          <li className="h-0.5 w-8 cursor-pointer bg-slate-100"></li>
          <li className="h-0.5 w-8 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-8 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-8 cursor-pointer bg-slate-600"></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
