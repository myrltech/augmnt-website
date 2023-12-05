import React from "react";
import Link from "next/link";

export default function BlogDetailMain() {
  /*======================================================
          renderRow1
  ======================================================*/
  const renderRow1 = () => {
    return (
      <div className="d-flex align-items-center justify-content-between blog-detail-main-article-content__row1">
        <div className="d-flex align-items-center">
          <img
            src="/imgs/desktop/blog-detail/blog-detail-author.svg"
            alt="author"
            className="blog-detail-main-article-content__row1__authorImg"
          />
          <div>
            <h3 className="blog-detail-main-article-content__row1__title font-14-Segoe-UI-600">
              Ferdi Çıldız
            </h3>
            <p className="blog-detail-main-article-content__row1__desc font-14-Segoe-UI-600">
              Aug 21, 2015 · 1 min read
            </p>
          </div>
        </div>
        <div className="blog-detail-main-article-content__row1__socialMedia">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-twitter-icon.svg"
              alt="twitter"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-linkedin-icon.svg"
              alt="linkedIn"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-facebook-icon.svg"
              alt="facebook"
            />
          </a>
          <img
            src="/imgs/desktop/blog-detail/black-bookmark-icon.svg"
            alt="bookmark"
            className="blog-detail-main-article-content__row1__socialMedia__bookmark"
          />
          <img
            src="/imgs/desktop/blog-detail/black-3-circles-icon.svg"
            alt=""
          />
        </div>
      </div>
    );
  };

  /*======================================================
          renderBlogDescription
  ======================================================*/
  const renderBlogDescription = () => {
    return (
      <>
        <div className="blog-detail-main-article-content__desc">
          <img
            src="/imgs/desktop/blog-detail/blog-detail-content-img-1.svg"
            alt=""
          />
          <p className="img-name">Sean Adams</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            eget nunc lobortis mattis aliquam faucibus. Tortor aliquam nulla
            facilisi cras fermentum odio. Habitasse platea dictumst quisque
            sagittis purus. Lacus luctus accumsan tortor posuere. Quisque id
            diam vel quam elementum pulvinar etiam non. Id volutpat lacus
            laoreet non curabitur gravida arcu ac. Non diam phasellus vestibulum
            lorem sed risus. Dictum varius duis at consectetur lorem donec.
            Vestibulum sed arcu non odio euismod lacinia.
          </p>
          <p>
            Id cursus metus aliquam eleifend mi in nulla posuere. Pretium nibh
            ipsum consequat nisl vel. Sed libero enim sed faucibus turpis in eu
            mi. Ultrices eros in cursus turpis massa. Ut sem nulla pharetra diam
            sit amet nisl suscipit adipiscing. Enim diam vulputate ut pharetra
            sit amet aliquam id diam. Ut tortor pretium viverra suspendisse. Vel
            elit scelerisque mauris pellentesque. Semper viverra nam libero
            justo. Congue mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque. Netus et malesuada fames ac turpis egestas sed tempus.
            Velit euismod in pellentesque massa placerat duis ultricies. Vitae
            ju
          </p>

          <video
            poster="/imgs/desktop/blog-detail/blog-detail-content-img-2.svg"
            src=""
          ></video>
          <p>
            Ekstra bilgi, bu video, Photoshop ve diğer grafik tasarım
            programları için video dersler hazırlayan Lynda tarafından
            Photoshop’un 25. Yılını kutlamak amacıyla hazırlanmış.
          </p>
          <p>Originally published at www.ferdicildiz.net on July 18, 2015.</p>
        </div>
      </>
    );
  };

  /*======================================================
          main
  ======================================================*/
  return (
    <div className="blog-detail-main">
      <div className="row mx-0 flex-nowrap align-items-start blog-detail-main-breadcrumb-block">
        <Link href={"/blogs"}>
          <a>
            <p className="font-24-nunito-sans-600 blog-detail-main-breadcrumb-text1">
              Home
            </p>
          </a>
        </Link>
        <p className="font-24-nunito-sans-600 blog-detail-main-breadcrumb-text2">
          Article
        </p>
      </div>
      <div className="row mx-0 align-items-start flex-md-nowrap">
        {/* blog detail */}
        <article className="col-12 col-md-8 blog-detail-main-article-content">
          <h1 className="blog-detail-main__h1">Lorem ipsum dolor sit amet,</h1>
          {renderRow1()}
          {renderBlogDescription()}
          <ul className="blog-detail-main-article-content__tagsBlock">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Adobe Photoshop</li>
          </ul>
          <div className="blog-detail-main-article-content__writtenBy">
            <img
              src="/imgs/desktop/blog-detail/blog-detail-author.svg"
              alt="author"
            />
            <div>
              <h4 className="blog-detail-main-article-content__writtenBy__text1">
                WRITTEN BY
              </h4>
              <h4 className="blog-detail-main-article-content__writtenBy__text2">
                Ferdi Çıldız
              </h4>
              <p className="blog-detail-main-article-content__writtenBy__text3">
                Digital Product Designer @Synchron. www.ferdicildiz.com
              </p>
            </div>
          </div>
        </article>
        {/* Recommended */}
        <div className="col-12 col-md-4 blog-detail-main-recommended-blog-colm">
          <h3 className="font-14-Segoe-UI-600 blog-detail-main-recommended-blog-colm__title">
            Recommended
          </h3>
          {[1, 2, 3].map((data, index) => (
            <article key={index} className="blog-details-side-blog-card">
              <Link href="/blog-detail">
                <a>
                  <figure>
                    <img
                      src="/imgs/desktop/blog-detail//blog-detail-card-1.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="font-24-proxima-nova-700 blog-detail-main-recommended-blog-colm__text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </h4>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
