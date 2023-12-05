import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function MobileHomeFoldFive() {
  const renderCard = () => {
    return (
      <div className="mobile-home-existing-client-card">
        <h2 className="text-right">
          <img
            src="/imgs-agency/mobile/company-logo/orange-hp.svg"
            alt="hp"
            className="mobile-home-existing-client-company-logo"
          />
        </h2>
        <p className="mobile-font-13-nunito-sans-400 mobile-home-existing-client-card-text-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.&nbsp;&nbsp;
        </p>
        <div className="d-flex align-items-start flex-nowrap">
          <img
            src="/imgs-agency/mobile/home/existing-client-img-1.svg"
            alt="existing client"
            className="mobile-home-existing-client-img-1"
          />
          <div>
            <h5 className="mobile-font-14-proxima-nova-700 mobile-home-existing-client-name">
              Akhil Sharma
            </h5>
            <span className="mobile-font-14-nunito-sans-400 mobile-home-existing-client-postion">
              Founder, Myrl Tech
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderBlogs = () => {
    return (
      <div className="mobile-home-blog-section">
        <h2 className="mobile-font-24-proxima-nova-700 mobile-home-blog-title">
          Blogs
        </h2>
        <div className="mobile-home-blog-card">
          <img
            src="/imgs-agency/mobile/home/home-blog-img.png"
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
                  src="/imgs-agency/mobile/home/existing-client-img-1.svg"
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
                  src="/imgs-agency/mobile/icons/time-icon.svg"
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
    <div className="mobile-home-existing-client-section">
      <h2 className="mobile-font-24-poiret-one-400">
        Here’swhat our existing
        <br />
        clients have said about
        <br /> <span className="mobile-font-24-proxima-nova-400">AUGMNT</span>
      </h2>
      <div className="mobile-home-existing-client-outer-section">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={115}
          totalSlides={3}
          isPlaying={true}
          interval={2700}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>{renderCard()}</Slide>
            <Slide index={1}>{renderCard()}</Slide>
            <Slide index={2}>{renderCard()}</Slide>
          </Slider>
          <div className="mobile-home-existing-client-slider-dotgroup">
            <DotGroup dotNumbers={false} className="slide_dotgroup" />
          </div>{" "}
        </CarouselProvider>
      </div>
      {renderBlogs()}
    </div>
  );
}
