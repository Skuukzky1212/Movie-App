import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "@components/Loading";
const wpApiUrl = import.meta.env.VITE_WP_API_URL;

const fetchBlogById = (id) =>
  fetch(`${wpApiUrl}/cases/${id}`).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch blog");
    return res.json();
  });

const BlogDetail = () => {
  const { id } = useParams();
  const currentIdBlog = id.slice(1);
  const {
    data: blog,
    isPending,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["blog", currentIdBlog],
    queryFn: () => fetchBlogById(currentIdBlog),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: false,
  });
  useEffect(() => {
    import("../assets/css/blog.css");
  }, []);

  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="mb-4 text-red-500">Không tìm thấy bài viết.</p>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          Thử lại
        </button>
      </div>
    );
  }

  if (isPending) return <Loading />;

  return (
    <div>
      <div className="c__submv">
        <div className="inner1080">
          <h2 className="ttl">
            <span className="ttl__jp">導入実績・導入例</span>
            <span className="ttl__en">CASES</span>
          </h2>
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>ホーム</Link>
            </li>
            <li>
              <Link to={"/blog"}>導入実績・導入例</Link>
            </li>
            <li>{blog?.title?.rendered}</li>
          </ul>
        </div>
      </div>
      <div className="sec-intro">
        <div className="content-box">
          <p className="img-main">
            <img
              src={blog?.featured_media_src_url || "/ActorNoImage.svg"}
              width="300"
              height="225"
              alt=""
            />
          </p>
          <p className="list-cats-single">
            <span className="bg-white"></span>
            <span className="date"></span>
          </p>
          <h2 className="product-name">{blog?.title?.rendered}</h2>
          <p className="product-desc-2"></p>
        </div>
      </div>
      <div className="sec-main-single">
        <div
          className="content-sec cmsContent"
          dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
        ></div>
      </div>

      <div className="sec-next-prev">
        <div className="content-sec">
          <div className="prev-post">
            <a href=""></a>
          </div>
          <div className="all-posts">
            <a href="">ALL</a>
          </div>
          <div className="next-post">
            <a href=""></a>
          </div>
        </div>
      </div>

      <div className="sec-main">
        <div className="inner1000">
          <section className="arch-cate">
            <div className="arch-cate__list">
              <div className="left">
                <p className="title pc">カテゴリーから探す</p>
                <p className="title sp active">カテゴリーから探す</p>
              </div>
              <div className="right">
                <ul className="box">
                  <li>
                    <p className="c__btn01 btn-all">
                      <Link to="/blog">
                        <span>すべて</span>
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="c__btn01">
                      <a href="">
                        <span></span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
