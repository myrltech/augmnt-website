import React, { Fragment } from "react";
import {
  techLogoArray1,
  techLogoArray2,
  techLogoArray3,
  techLogoArray4,
  techLogoArray5,
  techLogoArray6,
} from "./techLogo";

export default function LandingPageHomeFoldFour() {
  return (
    <div className="home-tech-logo-div">
      <h4 className="text-center home-tech-logo-title font-48-poiret-one-400">
        {/* Specialized Technologies */}
        Find Partners Specializing In These Technologies
      </h4>
      {/*==============================================================
       
                                 techArrayOne         

      ===============================================================*/}
      <div className="d-flex tech-logo-row-1 flex-nowrap justify-content-between align-items-center">
        {techLogoArray1.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
      {/*==============================================================
       
                                 techArrayTwo         

      ===============================================================*/}
      <div className="d-flex pt-50 flex-nowrap justify-content-between align-items-center">
        {techLogoArray2.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
      {/*==============================================================
       
                                 techArrayThree         

      ===============================================================*/}
      <div className="d-flex pt-50 flex-nowrap justify-content-between align-items-center">
        {techLogoArray3.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
      {/*==============================================================
       
                                 techArrayFour         

      ===============================================================*/}
      <div className="d-flex pt-50 flex-nowrap justify-content-between align-items-center">
        {techLogoArray4.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
      {/*==============================================================
       
                                 techArrayFive         

      ===============================================================*/}
      <div className="d-flex pt-50 flex-nowrap justify-content-between align-items-center">
        {techLogoArray5.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
      {/*==============================================================
       
                                 techArraySix         

      ===============================================================*/}
      <div className="d-flex pt-60 flex-nowrap justify-content-between align-items-center">
        {techLogoArray6.map((data, index) => (
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
  );
}
