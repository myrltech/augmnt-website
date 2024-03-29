import React, { Fragment } from "react";

const howItWorksArray = [
  {
    iconImg: "/imgs/mobile/icons/purple-save-icon.svg",
    iconClass: "how-it-work-purple-save-icon",
    // para: "Post your requirements for Product & Engineering Teams.",
    para: "Let us know your requirements for Engineering teams and technologies",
  },
  {
    iconImg: "/imgs/mobile/icons/blue-two-people-icon.svg",
    iconClass: "blue-two-people-icon",
    para: "We shortlist the right engineers for your requirements from our large network.",
    // para: "Top resource augmentation firms across the world access  your requirements.",
  },
  {
    iconImg: "/imgs/mobile/icons/how-it-work-red-star-icon.svg",
    iconClass: "how-it-work-red-star-icon",
    // para: "Connect with the best team for your specific requirements.",
    para: "We build out your fully managed remote engineering team and we ensure you always have the right engineers working on your project.",
  },
];

export default function MobileHomeFoldFour() {
  return (
    <div className="mobile-home-how-it-works-section">
      <h2 className="mobile-font-24-poiret-one-400 text-center">
        How does it work?
      </h2>
      <p className="mobile-font-14-nunito-sans-400 mobile-home-how-it-works--subtitle">
        {/* Lorem ipsum dolor sit amet, consectetur
        <br /> adipiscing elit, */}
        Onboard Engineering Resources In Just 3 Steps.
      </p>
      <div className="pt-28">
        {howItWorksArray.map((data, index) => (
          <Fragment key={index}>
            <div className="home-mobile-how-it-works-card d-flex flex-nowrap align-items-center">
              <div className="home-mobile-how-it-works-card-icon">
                <img
                  src={data.iconImg}
                  alt={data.para}
                  className={data.iconClass}
                />
              </div>
              <h3 className="mobile-font-12-nunito-sans-400 home-mobile-how-it-works-card-text">
                {data.para}
              </h3>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
