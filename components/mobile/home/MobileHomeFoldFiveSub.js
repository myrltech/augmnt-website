import React from "react";

const MobileHomeFoldFiveSub = () => {
  const renderBlogs = () => {
    return (
      <div className="mobile-home-blog-section">
        <h2 className="mobile-font-24-proxima-nova-700 mobile-home-blog-title">
          Blogs
        </h2>
        <div className="mobile-home-blog-card">
          <img
            src="/imgs/mobile/home/home-blog-img.png"
            alt="home blog"
            className="home-blog-img"
          />
          <div className="mobile-home-blog-card-content-section">
            <h2 className="mobile-font-24-poiret-one-400 mobile-home-blog-card-title">
              Blog TItel
            </h2>
            <p className="mobile-font-10-nunito-sans-300 mobile-home-blog-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor
            </p>
            <div className="d-flex align-items-center justify-content-between flex-nowrap">
              <div className="d-flex align-items-start flex-nowrap">
                <img
                  src="/imgs/mobile/home/existing-client-img-1.svg"
                  alt="existing client"
                  className="mobile-home-blog-profile-img-1"
                />
                <div>
                  <h5 className="mobile-font-10-proxima-nova-700 mobile-home-blog-card-blog-name">
                    Akhil Sharma
                  </h5>
                  <span className="mobile-font-10-nunito-sans-400 mobile-home-blog-card-company-name">
                    Founder, Myrl Tech
                  </span>
                </div>
              </div>
              <h3 className="mobile-home-blog-card-time-text">
                <img
                  src="/imgs/mobile/icons/time-icon.svg"
                  alt="blog clock icon"
                  className="mobile-home-blog-clock-icon"
                />{" "}
                2 min read
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mobile-home-existing-client-section">{renderBlogs()}</div>
  );
};

export default MobileHomeFoldFiveSub;
