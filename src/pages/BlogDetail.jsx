import { useParams } from "react-router-dom";
import "../assets/css/blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const currentIdBlog = id.slice(1);

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
              <a href="">ホーム</a>
            </li>
            <li>
              <a href="">導入実績・導入例</a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="sec-intro">
        <div className="content-box">
          <p className="img-main">
            <img src="" width="300" height="225" alt="" />
          </p>
          <p className="list-cats-single">
            <span className="bg-white"></span>
            <span className="date"></span>
          </p>
          <h2 className="product-name"></h2>
          <p className="product-desc-2"></p>
        </div>
      </div>
      <div className="sec-main-single">
        <div className="content-sec cmsContent"></div>
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
                      <a href="">
                        <span>すべて</span>
                      </a>
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
