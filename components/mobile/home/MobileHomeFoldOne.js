import React, { Fragment } from "react";

/*==============================
         awardArray
===============================*/
const awardArray = [
  {
    imgPath: "imgs/mobile/home/best-winter-icon.svg",
    imgClass: "mobile-best-winter-icon",
    imgName: "best winter",
  },
  {
    imgPath: "imgs/mobile/home/trustpilot.svg",
    imgClass: "mobile-trustpilot-img",
    imgName: "trustpilot",
  },
  {
    imgPath: "imgs/mobile/home/capterra.svg",
    imgClass: "mobile-capterra-img",
    imgName: "capterra",
  },
  {
    imgPath: "imgs/mobile/home/gartner.svg",
    imgClass: "mobile-gartner-img",
    imgName: "gartner",
  },
];

/*==============================
         techAgenciesArray
===============================*/
const techAgenciesArray = [
  {
    title: "Verified",
    icon: "imgs/mobile/icons/green-shield-icon.png",
    iconClass: "mobile-green-shield-icon",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    title: "Vetted",
    icon: "imgs/mobile/icons/orange-arrow-icon.png",
    iconClass: "mobile-orange-arrow-icon",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    title: "Trusted",
    icon: "imgs/mobile/icons/red-star-icon.png",
    iconClass: "mobile-red-star-icon",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];

export default function MobileHomeFoldOne() {
  /*===================================================

                 renderTechAgencies
                 
 =====================================================*/
  const renderTechAgencies = () => {
    return (
      <div className="mobile-home-tech-agencies-card">
        <h2 className="mobile-font-24-poiret-one-400">
          Find{" "}
          <span className="mobile-font-24-proxima-nova-900">
            {" "}
            Tech Agencies{" "}
          </span>
          <br />
          that are
        </h2>
        <div className="mobile-home-tech-agencies-content-section">
          {techAgenciesArray.map((data, index) => (
            <Fragment key={index}>
              <div>
                <h4 className="mobile-font-18-proxima-nova-700 pt-32 d-flex flex-nowrap align-items-center justify-content-between">
                  {data.title}{" "}
                  <img
                    src={data.icon}
                    alt={data.title}
                    className={data.iconClass}
                  />
                </h4>
                <p className="mobile-font-13-proxima-nova-250 mobile-home-tech-agencies-para">
                  {data.para}
                </p>
              </div>{" "}
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  /*===================================================

                 return
                 
 =====================================================*/
  return (
    <>
      <h2 className="text-center ">
        <img
          src="/imgs/mobile/home/home-title-text.svg"
          alt="THE ULTIMATE SOLUTION FOR RESOURCE AUGMENTATION"
          className="home-title-text"
        />
      </h2>
      <p className="mobile-font-14-nunito-sans-800 text-center mobile-home-fold-para-text">
        Freelancers drop the ball at the slightest hint of
        <br /> a challenge.
      </p>
      <p className="mobile-home-fold-para-text-2 mobile-font-12-nunito-sans-400 text-center">
        Use Our platform to connect with vetted, verified and
        <br /> top performing tech consultancies and agencies across
        <br /> the globe to augment your team for those cutting edge
        <br /> tech requirements.
      </p>
      <div className="text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://myrl-tech-augment.netlify.app/"
          className="mobile-home-start-project-btn-link"
        >
          <div className="mobile-home-start-project-btn">
            <span>
              <i className="fa fa-plus" />
            </span>
            Start A Project
          </div>
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-nowrap mobile-home-award-section">
        {awardArray.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>{" "}
      {renderTechAgencies()}
    </>
  );
}
