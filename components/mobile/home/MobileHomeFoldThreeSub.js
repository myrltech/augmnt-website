import React, { Fragment } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import { techLogoArray1, techLogoArray2, techLogoArray3 } from "./teclogoArray";
import "pure-react-carousel/dist/react-carousel.es.css";

const MobileHomeFoldThreeSub = () => {
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
  return (
    <>
      <div className="mobile-home-specialised-technologies-section">
        <h2 className="mobile-font-24-poiret-one-400 text-center">
          Specialised Technologies
        </h2>
        {renderSlider()}
      </div>
    </>
  );
};

export default MobileHomeFoldThreeSub;
