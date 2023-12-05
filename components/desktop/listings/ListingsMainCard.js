import React from "react";
import ListingsMainCardTeams from "./ListingsMainCardTeams";
import NeedToBeLoggedInModal from "./NeedToBeLoggedInModal";

export default function ListingsMainCard() {
  const renderViewDetailsButton = () => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://myrl-tech-augment.netlify.app/"
      >
        <span className="listings-main-card-btn">Contact</span>
      </a>
    );
  };

  return (
    <div className="listings-main-card">
      <div className="row mx-0 justify-content-between listings-main-card__row1">
        <div className="col-12 col-md-8 listings-main-card__row1__colm1">
          <h2 className="font-18-nunito-sans-700 listings-main-card__row1__colm1__text1">
            <span>3 UI/UX Designer required</span>{" "}
            <img src="/imgs/desktop/icons/green-shield-icon.png" alt="" />
          </h2>
          <hr className="d-block d-md-none listings-card-hr" />
          <div className="d-flex flex-wrap align-items-center listings-main-card__row1__colm1-textBlock">
            <p className="font-12-nunito-sans-600">
              <img
                src="/imgs/desktop/icons/orange-location-icon.svg"
                alt="location"
                className="listings-main-card__row1__colm1-img2"
              />
              Bangalore, India
            </p>
            <p className="font-12-nunito-sans-600">
              <img
                src="/imgs/desktop/icons/orange-calendar-icon.svg"
                alt="calendar"
                className="listings-main-card__row1__colm1-img3"
              />
              ESTD. 2016
            </p>

            <p className="font-12-nunito-sans-600">
              <img
                src="/imgs/desktop/icons/orange-two-users-icon.svg"
                alt="resources"
                className="listings-main-card__row1__colm1-img4"
              />
              12 Team Members
            </p>
          </div>
        </div>
        <div className="d-none d-md-block col-md-4 listings-main-card__row1__colm2">
          <h3 className="listings-main-card__row1__colm2-title font-36-nunito-sans-800">
            <span className="listings-main-card__row1__colm2-desc font-14-nunito-sans-600">
              Avg. Rate
            </span>
            $18
            <span className="listings-main-card__row1__colm2-desc font-14-nunito-sans-600">
              / Hour / Resource
            </span>
          </h3>
        </div>
      </div>
      <hr className="d-none d-md-block listings-card-hr" />

      {/* display on desktop */}
      <div className="row mx-0 flex-nowrap justify-content-between align-items-center listings-main-card__row2">
        <div className="d-none d-md-block col-9">
          <h4 className="listings-main-card__teams-title">TEAMs AVAILABLE</h4>
          <div className="row mx-0 align-items-center listings-main-card__team-row">
            <ListingsMainCardTeams title="NodeJS" count={3} />
            <ListingsMainCardTeams title="ReactJS" count={2} />
            <ListingsMainCardTeams title="NodeJS" count={4} />
            <ListingsMainCardTeams title="ReactJS" count={2} />
          </div>
        </div>
        <div className="d-none d-md-block col-3 listings-main-card__row2__colm1">
          {/* {renderViewDetailsButton()}
           */}
          <NeedToBeLoggedInModal />
        </div>
      </div>
      {/* display on mobile */}
      <div className="d-flex d-md-none align-items-center listings-main-card__lastRowMobile">
        <div className="col-6">
          <h5 className="listings-main-card__lastRowMobile__text">
            $24 / Hr / Resource
          </h5>
        </div>

        <div className="col-6 text-right">
          {" "}
          <NeedToBeLoggedInModal />
        </div>
      </div>
    </div>
  );
}
