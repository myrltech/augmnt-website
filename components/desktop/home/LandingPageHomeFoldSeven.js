import React, { Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// const existingClientArray = [
// {
// imgPath: "/imgs/desktop/company-logo/orange-hp.svg",
// imgClass: "home-existing-client-orange-hp-icon",
// },
// {
// imgPath: "/imgs/desktop/company-logo/hp.svg",
// imgClass: "home-existing-client-hp-icon",
// },
// ];

const imgPath1 = "/imgs/desktop/company-logo/orange-hp.svg";
const imgPath2 = "/imgs/desktop/company-logo/hp.svg";

const totalSlides = 3;
export default function LandingPageHomeFoldSeven() {
  const renderCard = (imgPath, imgClass) => {
    return (
      <>
        <div className="d-flex align-items-start  home-existing-client-card-outer-section flex-nowrap justify-content-start">
          {/* <div className="d-flex align-items-start  flex-nowrap justify-content-end"> */}
          <div className="home-existing-client-card">
            <div className="text-right">
              <img src={imgPath} alt="company logo" className={imgClass} />
            </div>
            <p className="font-18-nunito-sans-400 pt-30 home-existing-client-card-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex pt-15 flex-nowrap align-items-start">
              <img
                src={"/imgs/desktop/home/home-dummy-profile.svg"}
                alt="Akhil Sharma"
                className="home-existing-client-card-client-img"
              />
              <div>
                <h5 className="font-14-proxima-nova-700 home-existing-client-card-client-name">
                  Akhil Sharma
                </h5>
                <p className="font-14-nunito-sans-400 home-existing-client-card-client-position">
                  Augmnt
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  };
  return (
    <div className="home-fold-seven-section">
      <h2 className="text-right">
        <img
          src="/imgs/desktop/home/home-augmnt-title-text.svg"
          alt="Here’s what our existing clients have said about AUGMNT"
          className="home-augmnt-title-text"
        />
      </h2>

      {/* <div className="d-flex align-items-start  flex-nowrap justify-content-end">
        <div className="d-flex align-items-start home-existing-client-card-outer-section flex-nowrap justify-content-end">
          {existingClientArray.map((data, index) => (
            <Fragment key={index}>
              <div className="home-existing-client-card">
                <div className="text-right">
                  <img
                    src={data.imgPath}
                    alt="company logo"
                    className={data.imgClass}
                  />
                </div>
                <p className="font-18-nunito-sans-400 pt-30 home-existing-client-card-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="d-flex pt-15 flex-nowrap align-items-start">
                  <img
                    src={"/imgs/desktop/home/home-dummy-profile.svg"}
                    alt="Akhil Sharma"
                    className="home-existing-client-card-client-img"
                  />
                  <div>
                    <h5 className="font-14-proxima-nova-700 home-existing-client-card-client-name">
                      Akhil Sharma
                    </h5>
                    <p className="font-14-nunito-sans-400 home-existing-client-card-client-position">
                      Founder, Myrl Tech
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div> */}
      <div className="home-carousel-section">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={totalSlides}
          isPlaying={false}
          interval={2700}
          visibleSlides={1}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <div className="d-flex flex-nowrap">
                {renderCard(imgPath1, "home-existing-client-orange-hp-icon")}
                {renderCard(imgPath2, "home-existing-client-hp-icon")}
              </div>
            </Slide>
            <Slide index={1}>
              <div className="d-flexx flex-nowrap">
                {renderCard(imgPath1, "home-existing-client-orange-hp-icon")}{" "}
                {renderCard(imgPath2, "home-existing-client-hp-icon")}
              </div>
            </Slide>
            <Slide index={2}>
              <div className="d-flex flex-nowrap">
                {renderCard(imgPath1, "home-existing-client-orange-hp-icon")}{" "}
                {renderCard(imgPath2, "home-existing-client-hp-icon")}
              </div>
            </Slide>
          </Slider>
          <div className="home-carousel-section-arrow home-carousel-section-arrow--right--left">
            <ButtonBack>&#60;</ButtonBack>
          </div>
          <div className="home-carousel-section-arrow home-carousel-section-arrow--right">
            <ButtonNext>&#62;</ButtonNext>
          </div>
          {/* <div className="mobile-home-existing-client-slider-dotgroup">
            <DotGroup dotNumbers={false} className="slide_dotgroup" />
          </div>{" "} */}
        </CarouselProvider>
      </div>
      <div className="home-augmnt-fold-img-div">
        <img
          src="/imgs/desktop/home/home-augmnt-fold.png"
          alt="company logo"
          className={"home-augmnt-fold-img"}
        />
      </div>
    </div>
  );
}
