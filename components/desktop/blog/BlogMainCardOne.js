import React from "react";
import Link from "next/link";
import BlogMainAuthor from "./BlogMainAuthor";

export default function BlogMainCardOne() {
  return (
    <>
      <article className="row mx-0 align-items-start flex-nowrap blog-main-card-1">
        <div className="blog-main-card-1__imgBlock flex-shrink-0">
          <img src="/imgs/desktop/blog/blog-card-1.png" alt="" />
        </div>
        <div className="blog-main-card-1__contentBlock flex-grow-1">
          <h2 className="blog-main-card-1__title font-48-poiret-one-400">
            Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit, sed
            do <b>eiusmod tempor incididunt</b> ut labore et dolore magna
            aliqua.
          </h2>
          <p className="blog-main-card-1__desc font-14-nunito-sans-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="row mx-0 flex-nowrap justify-content-between align-items-center blog-main-card-1__btnRow">
            <Link href="/blog-detail">
              <a>
                <span className="blog-main-card-1__btn">Read More &#62;</span>
              </a>
            </Link>

            <p className="blog-main-card-1__btnRow__text font-14-proxima-nova-400">
              <img src="/imgs/desktop/blog/gray-clock-icon.svg" alt="clock" />2
              min read
            </p>
          </div>
          <BlogMainAuthor />
        </div>
      </article>
    </>
  );
}
