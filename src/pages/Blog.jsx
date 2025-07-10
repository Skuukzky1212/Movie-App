import Loading from "@components/Loading";
import RecipeReviewCard from "@components/Mui/RecipeReviewCard";
import useFetch from "@hooks/useFetch";

const wpApiUrl = import.meta.env.VITE_WP_API_URL;

const Blog = () => {
  const { dataFetched, isLoading } = useFetch({
    apiUrl: wpApiUrl + "/cases/",
    initValue: [],
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto flex items-start max-w-[1300px] flex-wrap gap-8 px-6 py-10">
          {(dataFetched || []).map((item) => (
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
