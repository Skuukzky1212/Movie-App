import Loading from "@components/Loading";
import RecipeReviewCard from "@components/Mui/RecipeReviewCard";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const wpApiUrl = import.meta.env.VITE_WP_API_URL;

const Blog = () => {
  const {
    isPending,
    error,
    isFetching,
    refetch,
    data: dataFetched,
  } = useQuery({
    queryKey: ["blogData"],
    queryFn: () =>
      fetch(wpApiUrl + "/cases/").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      }),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 phút
    cacheTime: 1000 * 60 * 30, // 30 phút
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="mb-4 ">
          Failed to get blogs. Please try agains! or{" "}
          <Link className="text-red-500 underline" to={"/"}>
            Back Home
          </Link>
        </p>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
        >
          Reload
        </button>
      </div>
    );
  }
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-start gap-8 px-6 py-10">
          {Array.isArray(dataFetched) &&
            dataFetched.map((item) => (
              <RecipeReviewCard
                key={item?.id}
                title={item?.title?.rendered}
                id={item?.id}
                shortDescription={item?.acf?.short_description}
                thumb={item?.featured_media_src_url || "/ActorNoImage.svg"}
                date={item?.date_gmt}
                content={item?.content?.rendered}
              />
            ))}
        </div>
      )}
    </>
  );
};
export default Blog;
