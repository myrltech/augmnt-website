import React, { Fragment } from "react";
import {
  companyLogoArrayOne,
  companyLogoArrayTwo,
  companyLogoArrayThree,
} from "./comapnyLogo";
const MobileHomeFoldTwoSub = () => {
  return (
    <>
      <h2 className="mobile-font-24-poiret-one-400 mobile-home-trusted-title text-center">
        Trusted By
      </h2>
      <div className="mobile-home-trusted-company-logo-section">
        {/*==================================================
                            ArrayOne
          ==================================================*/}
        <div className="d-flex flex-wrap align-items-center  justify-content-between">
          {companyLogoArrayOne.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />{" "}
            </Fragment>
          ))}
        </div>
        {/*==================================================
                            ArrayTwo
          ==================================================*/}
        <div className="d-flex flex-wrap align-items-center pt-20  justify-content-between">
          {companyLogoArrayTwo.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />{" "}
            </Fragment>
          ))}
        </div>
        {/*==================================================
                            ArrayOne
          ==================================================*/}
        <div className="d-flex flex-wrap align-items-center pt-20 justify-content-between">
          {companyLogoArrayThree.map((data, index) => (
            <Fragment key={index}>
              <img
                src={data.imgPath}
                alt={data.imgName}
                className={data.imgClass}
              />{" "}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileHomeFoldTwoSub;
