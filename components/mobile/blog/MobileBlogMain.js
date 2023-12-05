import React from "react";
import Link from "next/link";

export default function MobileBlogMain() {
  return (
    <div className="m-blog-main">
      <h2 className="m-blog-main-title font-32-poiret-one-400">Blogs</h2>
      <h3 className="m-blog-main-text1 font-14-proxima-nova-700">Featured</h3>

      {[1, 2, 3].map((data, index) => (
        <div key={index} className="m-blog-main-card">
          <Link href="/blog-detail">
            <a>
              <div className="m-blog-main-card__imgBlock">
                <img src="/imgs/mobile/blog/mobile-blog-card-1.png" alt="" />
              </div>
            </a>
          </Link>
          <div className="m-blog-main-card__content">
            <p className="m-blog-main-card__content__text1">Collaborate</p>
            <Link href="/blog-detail">
              <a>
                <h4 className="m-blog-main-card__content__text2">
                  Lorem Ipsum
                </h4>
              </a>
            </Link>
            <p className="m-blog-main-card__content__text3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <hr className="m-blog-main-card__hr" />
            <div className="d-flex justify-content-between align-items-center m-blog-main-card__row">
              <p className="m-blog-main-card__row__text1">
                <img
                  src="/imgs/mobile/blog/mobile-blog-card-author.svg"
                  alt="author"
                />
                Jhone Doe
              </p>
              <p className="m-blog-main-card__row__text2">
                <img src="/imgs/desktop/blog/gray-clock-icon.svg" alt="clock" />
                2 min read
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
