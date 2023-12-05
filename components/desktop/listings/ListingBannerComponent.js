import React from "react";
// imgs
const logo = "./imgs/desktop/listings/augmnt-agency-main-logo.svg";
const upArrow = "/imgs/desktop/listings/upword-arrow.svg";
const downArrow = "/imgs/desktop/listings/down-arrow.svg";
const rightSpringArrow = "/imgs/desktop/listings/right-spring-arrow-icon.svg";
const rightArrow = "/imgs/desktop/listings/right-arrow-icon.svg";
const personIcon = "/imgs/desktop/listings/running-person.svg";
const underline = "/imgs/desktop/listings/banner-underline.svg";

const ListingBannerComponent = () => {
  return (
    <>
      {/* <div className="text-right orange-btn--banner">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfXIxTykUKGQACrNW_LAbYXOVF2xydMEHEHnAjP_NvJrn-fxg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="orange-btn  font-24-nunito-sans-700">
            JOIN NOW!
          </button>
        </a>
      </div> */}
      <div className="pt-30">
        <img src={logo} alt="agency" className="augmnt-agency-logo" />
      </div>
      {/* community for section */}
      <div className="community-for-section d-flex">
        <div>
          <h2 className="text-center font-128-pacifico-normal text-color-gray relative">
            <span className="font-48-permanentMarker">#</span>1
            <div className="banner-up-arrow">
              <img src={upArrow} alt="upArrow" />
            </div>
          </h2>
          <h5 className="font-64-proxima-nova-800 text-color-pure-black">
            The community For <br />
            <span className="text-color-orange">Tech Agency Founders.</span>
          </h5>
          <ul className="d-flex community-list justify-content-between">
            <li className="pt-11 font-24-proxima-nova-400">Network</li>
            <li className="">
              <span className="dot"> . </span>
              <span className="text-color-orange pl-10 font-24-proxima-nova-900">
                {" "}
                Find Projects
              </span>
            </li>
            <li className="">
              <span className="dot"> .</span>{" "}
              <span className="pl-10 font-24-proxima-nova-400"> Grow</span>
            </li>
            <li className="">
              <span className="dot"> . </span>{" "}
              <span className="pl-10 font-24-proxima-nova-400"> Learn</span>
            </li>
            <li className="">
              <span className="dot">.</span>{" "}
              <span className="pl-10 font-24-proxima-nova-900 text-color-orange">
                Hire
              </span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center relative pl-72">
          <h5 className="font-32-coda ">On Slack </h5>
          <img
            src={"/imgs/desktop/home-new/home-hash-icon.png"}
            alt="hash"
            className="banner-hash-icon"
          />
          {/* banner img */}
          <div className="banner-group-img">
            <img
              src={"/imgs/desktop/listings/banner-img.svg"}
              alt="fold one text block"
              // className="home-new-fold-one"
            />
          </div>
        </div>
      </div>
      <h4 className="font-32-permanentMarker tech-agency-section text-color-pure-black relative">
        Are you a Tech Agency / Consultancy / Service Firm{" "}
        <span className="text-color-orange">Founder</span>?
        <div className="banner-down-arrow">
          <img src={downArrow} alt="downarrow" />
        </div>
      </h4>
      {/* problem section */}
      <div className="d-flex problem-section justify-content-between pt-30">
        <img src={personIcon} alt="person" className="runing-person-icon" />
        <div>
          <h5 className="font-24-gloria text-color-pure-black ">
            You <span className="text-color-orange "> probably </span>have one
            of these two
          </h5>
          <h2 className="font-96-permanentMarker text-color-orange relative">
            problems
            {/* spring right */}
            <div className="banner-spring-right-icon">
              <img src={rightSpringArrow} alt="spring arrow" />
            </div>
            {/* right */}
            <div className="banner-right-icon">
              <img src={rightArrow} alt="spring arrow" />
            </div>
            {/* underline */}
            <div className="banner-underline-icon">
              <img src={underline} alt="underline" />
            </div>
          </h2>
        </div>{" "}
        <div>
          <h5 className="font-24-gloria text-color-pure-black d-flex align-items-center">
            <span className="text-color-gray font-48-permanentMarker d-flex align-items-center">
              # <span className="font-72-permanentMarker"> 1 </span>
            </span>{" "}
            &nbsp; You have a project, but
            <span> no resources to deploy.</span>
          </h5>
          <h5 className="font-24-gloria pt-10 text-color-pure-black d-flex align-items-center">
            <span className="text-color-gray font-48-permanentMarker d-flex align-items-center">
              #<span className="font-72-permanentMarker"> 2</span>
            </span>{" "}
            &nbsp; You have resources on bench, but
            <span> no project for them.</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default ListingBannerComponent;
