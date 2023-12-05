import React from "react";
import { Fragment } from "react";

const dummyTextArray = [
  {
    text: "Project ready to go but no resources available ? Hire immediately from other agencies benches",
    customWidth: "home-new-fold-three-paraOne",
  },
  {
    text: "External leads from multiple (publicly available) sources are gathered by our team and posted on a dedicated channel",
    customWidth: "home-new-fold-three-paraTwo",
  },
  {
    text: "Grow and expand your network, meet, chat and hangout with other founders from your city, and others.",
    customWidth: "home-new-fold-three-paraThree",
  },
  {
    text: "Deploy 'benched' resources to other agencies' prjects that may need them",
    customWidth: "home-new-fold-three-paraFour",
  },
];

export default function HomeFoldFour({ id }) {
  /*==========================================================================
                             renderBlockTwo
  =========================================================================*/
  const renderBlockTwo = () => {
    return (
      <div className="d-flex mobile-flex-col align-items-center mobile-col-left justify-content-between home-new-fold-three-block-two">
        <div className="home-new-fold-three-block-two__img d-none d-md-block">
          <img
            src="/imgs-agency/desktop/home-new/home-fold-three-img.png"
            alt="home fold three"
          />
        </div>
        <div className="home-new-fold-three-block-two__img d-block d-md-none">
          <img
            src="/imgs-agency/mobile/home-new/home-mobile-fold-three-img.png"
            alt="home fold three"
          />
        </div>
        <div className="home-new-fold-three-content-block-two">
          <h3 className="font-44-proxima-nova-800 home-new-color-black">
            <span className="text-color-orange"> Use</span> Cases
          </h3>
          {dummyTextArray.map((data, key) => (
            <Fragment key={key}>
              <p
                className={`font-24-proxima-nova-400 home-new-fold-three-block-two-para ${data.customWidth}`}
              >
                {data.text}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };

  return <div id={id}>{renderBlockTwo()}</div>;
}
