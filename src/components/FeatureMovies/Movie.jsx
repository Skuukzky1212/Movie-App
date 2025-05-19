import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from "react";
const apiImageUrl = import.meta.env.VITE_MOVIE_API_IMAGE_URL;
import $ from "jquery";

const Movie = ({ activeMovieData, animateFadeUpRefs, animateBackdropRef }) => {
  useLayoutEffect(() => {
    let animateTimeout;

    for (const el of animateFadeUpRefs.current) {
      if (!el) continue;

      const $el = $(el);
      const backdrop = animateBackdropRef.current;
      const $pagiClicked = $(".pagi-clicked");

      $el.addClass("animate-fade-up");
      backdrop.classList.add("animate-fade");

      if ($el.hasClass("pagi-clicked")) {
        $pagiClicked.removeClass("animate-fade-up");
        backdrop.classList.remove("animate-fade");
        setTimeout(() => {
          $pagiClicked.removeClass("pagi-clicked");
        }, 200);
      } else {
        animateTimeout = setTimeout(() => {
          el.classList.remove("animate-fade-up");
          backdrop.classList.remove("animate-fade");
        }, 2000);
      }
    }

    return () => clearTimeout(animateTimeout);
  }, [activeMovieData, animateFadeUpRefs, animateBackdropRef]);
  return (
    <div>
      <p className="h-full bg-slate-950">
        <img
          ref={animateBackdropRef}
          src={
            activeMovieData[0]?.backdrop_path
              ? apiImageUrl + activeMovieData[0]?.backdrop_path
              : "https://th.bing.com/th/id/R.a91fd967cb61075b6b014dfcfd0e877c?rik=DZWj%2fLYvB%2f9e9A&pid=ImgRaw&r=0"
          }
          alt=""
          className="animate-delay-[600ms] animate-duration-[1400ms] block aspect-video h-full w-full object-cover brightness-50"
        />
      </p>
      <div className="sp:w-1/2 absolute bottom-[6%] left-8 top-0 m-auto flex w-1/3 flex-col justify-center text-white">
        <p
          ref={(el) => (animateFadeUpRefs.current[0] = el)}
          className="animate-duration-1000 animate-delay-[200ms] pc:text-[2vw] mb-2 font-bold"
        >
          {activeMovieData[0]?.original_title}
        </p>
        <div>
          <p
            ref={(el) => (animateFadeUpRefs.current[1] = el)}
            className="animate-duration-700 animate-delay-[400ms] mb-2 inline-block border border-gray-400 p-1 text-[1vw] text-gray-400"
          >
            PG13
          </p>
          <p
            ref={(el) => (animateFadeUpRefs.current[2] = el)}
            className="animate-duration-700 animate-delay-[400ms] mb-4 text-[1vw]"
          >
            {activeMovieData[0]?.release_date}
          </p>
        </div>
        <div>
          <div className=" sp:hidden text-[1.2vw]">
            <p
              ref={(el) => (animateFadeUpRefs.current[3] = el)}
              className="animate-duration-700 animate-delay-[500ms] mb-2 font-bold"
            >
              Overview
            </p>
            <p
              ref={(el) => (animateFadeUpRefs.current[4] = el)}
              className="animate-duration-700 animate-delay-[600ms] line-clamp-7 mb-4"
            >
              {activeMovieData[0]?.overview}
            </p>
          </div>
          <div
            ref={(el) => (animateFadeUpRefs.current[5] = el)}
            className="animate-duration-1000 animate-delay-[1200ms] flex items-center"
          >
            <button className="group relative mr-6 inline-flex cursor-pointer items-center justify-center gap-1 rounded-[4px] border-[2px] border-transparent bg-white px-6 py-2 pl-9 text-[14px] text-black transition-all duration-[0.3s] hover:border-white hover:bg-transparent">
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
    </div>
  );
};
export default Movie;
