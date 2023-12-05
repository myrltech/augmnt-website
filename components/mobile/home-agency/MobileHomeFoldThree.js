import React, { Fragment } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { techLogoArray1, techLogoArray2, techLogoArray3 } from "./teclogoArray";

/*=======================================================
                 array
========================================================*/
const augmntArray = [
  {
    iconPath: "/imgs-agency/mobile/icons/wallet-icon.svg",
    iconClass: "mobile-home-wallet-icon",
    title: "Saving Costs",
  },
  {
    iconPath: "/imgs-agency/mobile/icons/star-hand-icon.svg",
    iconClass: "mobile-home-star-hand-icon",
    title: "Rewarding",
  },
  {
    iconPath: "/imgs-agency/mobile/icons/weight-icon.svg",
    iconClass: "mobile-home-weight-icon",
    title: "Ease of scaling",
  },
  {
    iconPath: "/imgs-agency/mobile/icons/dollar-icon.svg",
    iconClass: "mobile-home-dollar-icon",
    title: "Completely Free",
  },
];

export default function MobileHomeFoldThree() {
  /*=======================================================
                  renderSlider
========================================================*/
  const renderSlider = () => {
    return (
      <>
        <div className="mobile-home-technologies-outer-section">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={60}
            totalSlides={3}
            isPlaying={true}
            interval={2700}
            playDirection={"forward"}
            step={1}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>{renderTechCard(techLogoArray1)}</Slide>
              <Slide index={1}>{renderTechCard(techLogoArray2)}</Slide>
              <Slide index={2}>{renderTechCard(techLogoArray3)}</Slide>
            </Slider>
            <div className="text-center">
              <DotGroup dotNumbers={false} className="slide_dotgroup" />
            </div>{" "}
          </CarouselProvider>
        </div>
      </>
    );
  };

  /*=======================================================
                  renderTechCard
========================================================*/
  const renderTechCard = (techArray) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        {techArray.map((data, index) => (
          <Fragment key={index}>
            <div className="col-3 p-0 text-center mb-40">
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />
            </div>
          </Fragment>
        ))}{" "}
      </div>
    );
  };

  /*=======================================================
                  render
========================================================*/
  return (
    <>
      <div className="mobile-home-specialised-technologies-section">
        <h2 className="mobile-font-24-poiret-one-400 text-center">
          Specialised Technologies
        </h2>
        {renderSlider()}
      </div>
      <div className="mobile-home-augmnt-advantage-section">
        <h2 className="mobile-font-24-poiret-one-400 mobile-home-augmnt-advantage-title">
          The Advantages of
        </h2>
        <h3 className="mobile-font-24-proxima-nova-700 mobile-home-augmnt-advantage-subtitle">
          Using AUGMNT
        </h3>
        <div className="mobile-home-augmnt-advantage-card-section">
          {augmntArray.map((data, index) => (
            <Fragment key={index}>
              <div className="mobile-home-augmnt-advantage-card d-flex align-items-center">
                <div className="mobile-home-augmnt-advantage-icon-div">
                  <img
                    src={data.iconPath}
                    alt={data.title}
                    className={data.iconClass}
                  />
                </div>
                <h3 className="mobile-font-18-proxima-nova-400 mobile-home-augmnt-advantage-card-text">
                  {data.title}
                </h3>
              </div>
            </Fragment>
          ))}
        </div>{" "}
      </div>
    </>
  );
}
