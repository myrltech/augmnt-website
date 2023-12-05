import React from "react";
import BlogMainCardOne from "../blog/BlogMainCardOne";

export default function LandingPageHomeFoldEight() {
  return (
    <>
      <div className="home-blog-section">
        <h2 className="text-right">
          <img
            src="/imgs/desktop/home/home-blog-title-img.svg"
            alt="blog"
            className="home/home-bolg-title-img"
          />
        </h2>
      </div>
      <BlogMainCardOne />
    </>
  );
}
