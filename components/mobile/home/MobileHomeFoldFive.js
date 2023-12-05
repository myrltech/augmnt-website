import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const imgPath1 = "/imgs/desktop/home/nuro-dynamic-ai-logo.png";
const name1 = "neuro dynamic ai";
const para1 =
  "Augmnt has been a lifesaver on multiple occasions. We were in the midst of building our product and needed experienced MLOps talent and were able to find them on Augmnt. You can trust Augmnt.";
const founder1 = "Amritansh";
const founderImg1 = "/imgs/desktop/home/neo-dynamic-ceo.svg";
const company1 = "Founder, NeuroDynamic Ai";

const imgPath2 = "/imgs/desktop/home/seven-targets-logo.svg";
const name2 = "seven targets";
const para2 =
  "We’ve been using Augmnt since quite a while, and have always been pleasantly surprised by the number of engineers you can tap into through the various tech agencies listed on the platform. Will recommend this to all SAAS firrms.";
const founder2 = "Sanju Burkule";
const founderImg2 = "/imgs/desktop/home/seven-targets-ceo.svg";
const company2 = "CEO, 7Targets.Ai";

const imgPath3 = "/imgs/desktop/home/super-blog.svg";
const name3 = "super blog";
const para3 =
  "Hire verified engineers for short-term contracts from agencies where they’re already employed? sounded too good to be true. But the Augmnt ecosystem delivers, time and again.";
const founder3 = "Sai  Krishna";
const founderImg3 = "/imgs/desktop/home/super-blog-ceo.svg";
const company3 = "Founder, SuperBlog.Ai";

export default function MobileHomeFoldFive() {
  const renderCard = (
    imgPath,
    imgName,
    para,
    founderImg,
    founderName,
    founderCompany,
    companyImgClass
  ) => {
    return (
      <div className="mobile-home-existing-client-card">
        <h2 className="mobile-home-existing-client-card-img">
          {/* <img
            src="/imgs/mobile/company-logo/orange-hp.svg"
            alt="hp"
            className="mobile-home-existing-client-company-logo"
          /> */}
          {imgPath && (
            <img src={imgPath} alt={imgName} className={companyImgClass} />
          )}
        </h2>
        <p className="mobile-font-13-nunito-sans-400 mobile-home-existing-client-card-text-1">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.&nbsp;&nbsp; */}
          {para}&nbsp;&nbsp;
        </p>
        <div className="d-flex align-items-start flex-nowrap">
          <img
            src={founderImg}
            // src="/imgs/mobile/home/existing-client-img-1.svg"
            alt={founderName}
            className="mobile-home-existing-client-img-1"
          />
          <div>
            <h5 className="mobile-font-14-proxima-nova-700 mobile-home-existing-client-name">
              {/* Akhil Sharma */}
              {founderName}
            </h5>
            <span className="mobile-font-14-nunito-sans-400 mobile-home-existing-client-postion">
              {/* Founder, Myrl Tech */}
              {founderCompany}
            </span>
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
          naturalSlideHeight={120}
          totalSlides={3}
          isPlaying={false}
          interval={2700}
          playDirection={"forward"}
          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              {/* imgPath,imgName,para,founderImg,founderName,founderCompany */}
              {renderCard(
                imgPath1,
                name1,
                para1,
                founderImg1,
                founder1,
                company1,
                "mobile-home-company-img1"
              )}
            </Slide>
            <Slide index={1}>
              {renderCard(
                imgPath2,
                name2,
                para2,
                founderImg2,
                founder2,
                company2,
                "mobile-home-company-img2"
              )}
            </Slide>
            <Slide index={2}>
              {renderCard(
                imgPath3,
                name3,
                para3,
                founderImg3,
                founder3,
                company3,
                "mobile-home-company-img3"
              )}
            </Slide>
          </Slider>
          <div className="mobile-home-existing-client-slider-dotgroup">
            <DotGroup dotNumbers={false} className="slide_dotgroup" />
          </div>{" "}
        </CarouselProvider>
      </div>
    </div>
  );
}
