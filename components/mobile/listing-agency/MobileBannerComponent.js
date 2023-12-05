import React from "react";

// imgs
const logo = "/imgs-agency/desktop/listings/augmnt-agency-main-logo.svg";
const banner = "/imgs-agency/desktop/listings/mobile-banner-img.svg";
const underline = "/imgs-agency/desktop/listings/banner-underline.svg";
const sprialArrow = "/imgs-agency/desktop/listings/mobile-down-spring-arrow.svg";
const downArrow = "/imgs-agency/desktop/listings/mobile-down-arrow.svg";

const MobileBannerComponent = () => {
  return (
    <div id="problem">
      <div className="mobile-banner-logo-section text-center">
        <img src={logo} alt="logo" className="mobile-augmnt-logo" />
      </div>
      <div className="mobile-community-section">
        <h2 className="text-color-pure-black mobile-font-44-proxima-nova-900 text-center">
          The community For{" "}
          <span className="text-color-orange"> Tech Agency Founders.</span>
        </h2>
        <ul className="d-flex justify-content-between mobile-banner-list text-color-pure-black">
          <li className="mobile-font-14-proxima-nova-400">Network </li>
          <li className="mobile-font-14-proxima-nova-800 text-color-orange">
            <span>.</span> Find Projects
          </li>
          <li className="mobile-font-14-proxima-nova-400">
            <span>.</span> Grow
          </li>
          <li className="mobile-font-14-proxima-nova-400">
            <span>.</span> Learn
          </li>
          <li className="mobile-font-14-proxima-nova-800 text-color-orange">
            <span>.</span> Hire
          </li>
        </ul>
        <h5 className="mobile-banner-slack-section text-color-pure-black">
          <img
            src={"/imgs-agency/desktop/home-new/home-hash-icon.png"}
            alt="hash"
            className="banner-hash-icon"
          />
          On <span className="text-color-orange"> Slack </span>
        </h5>
        <div className="text-center">
          <img src={banner} alt="banner" className="banner-img" />
        </div>
        <div className="text-center">
          <a
            href="https://form.jotform.com/221702664661050"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="orange-btn">JOIN NOW!</button>
          </a>
        </div>
      </div>
      <div className="mobile-banner-problem-section text-center">
        <h3 className="text-color-pure-black mobile-font-18-gloria-regular">
          Are you a Tech Agency / Consultancy / Service Firm{" "}
          <span className="text-color-orange"> Founder</span> ?
        </h3>
        <h4 className="mobile-font-16-gloria-regular pt-40">
          You <span className="text-color-orange"> probably </span>
          have one of these two
        </h4>
        <h2 className="mobile-font-54-permanet-400 text-color-orange relative">
          problems
          <div className="mobile-banner-underline-icon">
            <img src={underline} alt="underline" />
          </div>
        </h2>
        <div className="d-flex banner-problems-content-section">
          <div className="col-5 p-0">
            <img
              src={sprialArrow}
              alt="arrow"
              className="mobile-sprial-down-arrow"
            />
            <h4 className="mobile-font-32-permanet-400 text-color-gray"># 1</h4>
            <h5 className="text-color-pure-black mobile-font-14-gloria-regular">
              You have a project, but{" "}
              <span className="text-color-orange">
                {" "}
                no resources to deploy.
              </span>
            </h5>
          </div>
          <div className="col-2"></div>
          <div className="col-5 p-0">
            <img
              src={downArrow}
              alt="down arrow"
              className="mobile-banner-down-arrow"
            />
            <h4 className="mobile-font-32-permanet-400 text-color-gray"># 2</h4>
            <h5 className="text-color-pure-black mobile-font-14-gloria-regular">
              You have resources on bench, but
              <span className="text-color-orange"> no project to deploy.</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBannerComponent;
