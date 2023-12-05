import React, { Fragment } from "react";
import { companyLogoArrayOne, companyLogoArrayTwo } from "./companyLogos";

export default function LandingPageHomeFoldTwo() {
  return (
    <div className="home-fold-two-div">
      <h2 className="text-center font-18-nunito-sans-700 home-fold-two-title">
        Trusted By
      </h2>
      <div className="home-fold-two-content-section">
        <div className="d-flex align-items-center flex-nowrap justify-content-center ">
          {companyLogoArrayOne.map((data, key) => (
            <Fragment key={key}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
        <div className="d-flex align-items-center flex-nowrap justify-content-center pt-60">
          {companyLogoArrayTwo.map((data, key) => (
            <Fragment key={key}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
