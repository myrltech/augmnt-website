import React, { Fragment } from "react";

/*=======================================================
                 array
========================================================*/
const augmntArray = [
  {
    iconPath: "/imgs/mobile/icons/wallet-icon.svg",
    iconClass: "mobile-home-wallet-icon",
    // title: "Saving Costs",
    title: "Save Time, Save Money",
  },
  {
    iconPath: "/imgs/mobile/icons/star-hand-icon.svg",
    iconClass: "mobile-home-star-hand-icon",
    // title: "Rewarding",
    title: "Effective",
  },
  {
    iconPath: "/imgs/mobile/icons/weight-icon.svg",
    iconClass: "mobile-home-weight-icon",
    // title: "Ease of scaling",
    title: "Scale Easy",
  },
  {
    iconPath: "/imgs/mobile/icons/dollar-icon.svg",
    iconClass: "mobile-home-dollar-icon",
    title: "Completely Free",
  },
];

export default function MobileHomeFoldThree() {
  /*=======================================================
                  render
========================================================*/
  return (
    <>
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
