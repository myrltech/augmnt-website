import React, { Fragment } from "react";
import NeedDevelopersModal from "../popup/NeedDevelopersModal";
const awardArray = [
  {
    imgPath: "imgs/desktop/home/best-winter-icon.svg",
    imgClass: "best-winter-icon",
    imgName: "best winter",
  },
  {
    imgPath: "imgs/desktop/home/trustpilot.svg",
    imgClass: "trustpilot-img",
    imgName: "trustpilot",
  },
  {
    imgPath: "imgs/desktop/home/capterra.svg",
    imgClass: "capterra-img",
    imgName: "capterra",
  },
  {
    imgPath: "imgs/desktop/home/gartner.svg",
    imgClass: "gartner-img",
    imgName: "gartner",
  },
];
export default function LandingPageHomeFoldOne() {
  const renderCard = () => {
    return (
      <div className="d-flex align-items-start flex-nowrap home-find-agencies-card">
        <div className="home-find-agencies-card--col-1">
          <h3 className="font-24-poiret-one-400 ">
            Find
            <br />
            <span className="font-24-proxima-nova-900">
              Tech Agencies <br />
            </span>{" "}
            that are
          </h3>
        </div>
        <div className="home-find-agencies-card--col-2">
          <h4 className="font-24-proxima-nova-700">
            Verified
            <span className="float-right">
              <img
                src={"/imgs/desktop/icons/green-shield-icon.png"}
                alt=""
                className="home-green-shield-icon"
              />
            </span>
          </h4>
          <p className="font-13-proxima-nova-400 pt-20 home-find-agencies-card--para relative">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            {/* We've manually verified our 500+ Tech Agency partners and have
            onboarded only The Best Agencies. */}
            We manually verify and onboard tech agency partners on our platform.
          </p>
        </div>
        <div className="home-find-agencies-card--col-3">
          <h4 className="font-24-proxima-nova-700">
            Vetted
            <span className="float-right">
              <img
                src={"/imgs/desktop/icons/orange-arrow-icon.png"}
                alt=""
                className="home-orange-arrow-icon"
              />
            </span>
          </h4>
          <p className="font-13-proxima-nova-400 pt-20 home-find-agencies-card--para relative">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            {/* Only agencies with a consistent and proven track record make it to
            our platform. */}
            Skilled engineers with years of real <br /> world experience work at
            our agency partner firms.
          </p>
        </div>
        <div className="home-find-agencies-card--col-4">
          <h4 className="font-24-proxima-nova-700">
            Trusted
            <span className="float-right">
              <img
                src={"/imgs/desktop/icons/red-star-icon.png"}
                alt=""
                className="home-red-star-icon"
              />
            </span>
          </h4>
          <p className="font-13-proxima-nova-400 pt-20 home-find-agencies-card--para relative">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Our tech agency partners are deeply trusted by some of the largest
            enterprise firms and SAAS companies.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="home-fold-one-section">
      <div className="d-flex flex-nowrap justify-content-between align-items-center">
        <div className="relative">
          <h2>
            <img
              // src={"imgs/desktop/home/home-fold-one-text.svg"}
              src={"imgs/desktop/home/home-img.svg"}
              alt="THE ULTIMATE SOLUTION FOR RESOURCE AUGMENTATION"
              className="home-fold-one-text"
            />
          </h2>
          {/* font-16-nunito-sans-400 */}
          <p className="font-14-nunito-sans-400 home-fold-one-para relative">
            {/* Freelancers drop the ball at the slightest hint of a challenge. Use
            Our platform <br />
            to connect with vetted, verified and top performing tech
            consultancies and <br />
            agencies across the globe to augment your team for those cutting
            edge tech <br />
            requirements. */}
            With AUGMNT, you can hire engineers that are already working at top
            tech <br /> agencies and consultancies. It’s <b>100% Free</b> for
            SAAS companies. <br />
            Just drop in your requirements and our partners will reach out to
            you.
          </p>
        </div>
        <div className="home-fold-one-img-div">
          <img
            src={"imgs/desktop/home/home-fold-one.png"}
            alt="augmnt fold one"
            className="home-fold-one-img"
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between home-fold-one-btn-imgs-section">
        <NeedDevelopersModal />
        <div>
          {awardArray.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="pt-50">{renderCard()}</div>
    </div>
  );
}
