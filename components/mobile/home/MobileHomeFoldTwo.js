import React, { Fragment } from "react";

import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function MobileHomeFoldTwo() {
  /*=======================================================
                 renderCardOne
========================================================*/
  const renderCardOne = () => {
    return (
      <div className="mobile-home-tech-team-card">
        <h3 className="mobile-font-24-proxima-nova-700 mobile-home-tech-team-card-text1">
          <span className="mobile-home-tech-team-card-text2">
            Hiring and training{" "}
          </span>
          your own tech team takes
          <span className="mobile-home-tech-team-card-text2"> too long.</span>
        </h3>
        <h5 className="text-right text-uppercase mobile-font-14-proxima-nova-700 mobile-home-tech-team-para">
          how we can help you
        </h5>
        <p className="mobile-font-14-nunito-sans-400 mobile-home-tech-team-card-text3">
          <span className="mobile-font-14-nunito-sans-800">AUGMNT </span>
          is the fastest way to scale up your tech teams on super-short notice.
          <br />
          <br />
          {/* Great developers already work at our partner tech agencies and on many
          occasions are un-utilized and available on bench. */}
          Hire from our pre-existing network of great
developers that are highly skilled. 
        </p>
      </div>
    );
  };

  /*=======================================================
                 renderCardTwo
========================================================*/
  const renderCardTwo = () => {
    return (
      <div className="mobile-home-tech-team-card">
        <h3 className="mobile-font-24-proxima-nova-700 mobile-home-tech-team-card-text1">
          <span className="mobile-home-tech-team-card-text2">
            {" "}
            Onboarding freelancers{" "}
          </span>
          on your team is a{" "}
          <span className="mobile-home-tech-team-card-text2">hassle.</span>{" "}
          {/* Interviewing and building trust takes */}
          {/* <span className="mobile-home-tech-team-card-text2"> */}
          {/* {" "} */}
          {/* too long. */}
          {/* </span>{" "} */}
        </h3>
        <h5 className="text-right text-uppercase mobile-font-14-proxima-nova-700 mobile-home-tech-team-para">
          how we can help you
        </h5>
        <p className="mobile-font-14-nunito-sans-400 mobile-home-tech-team-card-text3">
          {/* Great developers already work at our partner tech agencies and on many
          occasions are un-utilized and available on bench. */}
          {/* Get an added layer of responsibility and accountability when you work
          with trusted agencies. */}
          This is why we recommend working with engineers through us, we manage your remote engineers, take care of billing, taxes and payments. 
        </p>
      </div>
    );
  };

  /*=======================================================
                 renderCardThree
========================================================*/
  const renderCardThree = () => {
    return (
      <div className="mobile-home-tech-team-card">
        <h3 className="mobile-font-24-proxima-nova-700 mobile-home-tech-team-card-text1">
          Getting the{" "}
          <span className="mobile-home-tech-team-card-text2">
            {" "}
            right, reliable{" "}
          </span>
          tech talent takes many iterations.{" "}
        </h3>
        <h5 className="text-right text-uppercase mobile-font-14-proxima-nova-700 mobile-home-tech-team-para">
          how we can help you
        </h5>
        <p className="mobile-font-14-nunito-sans-400 mobile-home-tech-team-card-text3">
          {/* Just place a request for the desired number of developers.
          <br />
          And start working with available developers at top tech agencies. */}
          This is why we recommend working with engineers
through us, we manage your remote engineers, take care
of billing, taxes and payments. 
        </p>
      </div>
    );
  };

  /*=======================================================
                 renderCardFour
========================================================*/
  const renderCardFour = () => {
    return (
      <div className="mobile-home-tech-team-card">
        <h3 className="mobile-font-24-proxima-nova-700 mobile-home-tech-team-card-text1">
          Not all selected developers
          <span className="mobile-home-tech-team-card-text2"> fit in </span>
          with your culture.
        </h3>
        <h5 className="text-right text-uppercase mobile-font-14-proxima-nova-700 mobile-home-tech-team-para">
          how we can help you
        </h5>
        <p className="mobile-font-14-nunito-sans-400 mobile-home-tech-team-card-text3">
          {/* Our partner tech agencies will replace the talent that doesn’t meet
          your expectations.{" "} */}
          We will replace engineers from your remote team that don’t match your expectations to ensure you always have the top talent.
        </p>
      </div>
    );
  };
  /*=======================================================
                renderTechTeams
========================================================*/
  const renderTechTeams = () => {
    return (
      <>
        <h2 className="mobile-font-24-poiret-one-400 mobile-home-trusted-title text-center">
          {/* Leverage The Power Of
          <br /> Virtual Tech Teams */}
          Hire Engineers Fast!
        </h2>
        <div className="mobile-home-teach-team-card-section">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            isPlaying={true}
            interval={2700}
            playDirection={"forward"}
            step={1}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>{renderCardOne()}</Slide>
              <Slide index={1}>{renderCardTwo()}</Slide>
              <Slide index={2}>{renderCardThree()}</Slide>
              <Slide index={3}>{renderCardFour()}</Slide>
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
                return
========================================================*/
  return <>{renderTechTeams()}</>;
}
