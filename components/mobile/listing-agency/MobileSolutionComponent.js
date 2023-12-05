import React from "react";
import { Fragment } from "react";

//img
const logo = "/imgs-agency/desktop/listings/augmnt-agency-logo.svg";
const underline = "/imgs-agency/desktop/listings/solution-underline.svg";
const downArrow = "/imgs-agency/desktop/listings/mobile-white-down-arrow.svg";

//array
const soultionData = [
  //1
  {
    count: "450+",
    text: (
      <>
        Agency <span className="text-color-orange"> Founders </span> joined in
        the community.
      </>
    ),
  },
  //2
  {
    count: (
      <>
        <span className="mobile-font-20-pacifico-400"> $ </span> 1{" "}
        <span className="mobile-font-26-pacifico-400"> mn </span>{" "}
      </>
    ),
    text: (
      <>
        Business <span className="text-color-orange"> Exchanged </span> every
        month, amongst agencies.
      </>
    ),
  },
  //3
  {
    count: "80+",
    text: (
      <>
        Requirements <span className="text-color-orange"> Generated </span> each
        month.{" "}
      </>
    ),
  },
  //4
  {
    count: "30+",
    text: (
      <>
        External <span className="text-color-orange"> leads</span> shared per
        month.{" "}
      </>
    ),
  },
];

const MobileSolutionComponent = () => {
  return (
    <div className="mobile-solution-section text-center" id="solution">
      <h4 className="mobile-font-26-gloria-regular">
        Now there’s a<br />
        <span className="text-color-orange mobile-font-48-permanet-400 relative">
          solution
          <div className="solution-underline">
            <img src={underline} alt="underline" />
          </div>
          <div className="solution-downArrow">
            <img src={downArrow} alt="down arrow" />
          </div>
        </span>
      </h4>
      <img src={logo} alt="logo" className="solution-logo-img" />
      <div className="d-flex justify-content-end align-items-start mobile-solution-slack-text">
        <img
          src={"/imgs-agency/desktop/home-new/home-hash-icon.png"}
          alt="hash"
          className="solution-hash-icon"
        />
        <h5 className="mobile-font-16-coda-400 ">
          {" "}
          <span className="text-color-orange">Slack </span>
          <br /> <span className="mobile-font-16-permanet-400">
            communuity
          </span>{" "}
        </h5>
      </div>
      {/* array */}
      <div className="mobile-solution-card-section">
        {soultionData.map((data, key) => (
          <Fragment key={key}>
            <div className="d-flex align-items-start mobile-solution-card">
              <div className="col-4  text-center">
                <h5 className="mobile-font-42-pacifico-400">{data.count}</h5>
                {key === 1 ? (
                  <span className="text-color-orange mobile-font-20-proxima-800 mt--1">
                    Agency{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="col-8">
                <h5 className="mobile-font-14-gloria-regular">{data.text}</h5>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MobileSolutionComponent;
