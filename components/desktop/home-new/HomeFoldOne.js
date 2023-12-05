import React from "react";
import { Fragment } from "react";

const dummyTextArray = [
  {
    count: 200,
    text: "Agency Founders",
  },
  {
    count: 20,
    text: `Agency to Agency requirement fulfilment / week`,
  },
  {
    count: 50,
    text: `Fresh, Handpicked, High  Quality, External Leads`,
  },
  {
    count: 30,
    text: `High Quality Agency To Agency  Leads Listed per week`,
  },
];
export default function HomeFoldOne() {
  const renderCountTextBlock = () => {
    return (
      <div className="home-new-count-text-section d-flex flex-wrap">
        {dummyTextArray.map((data, key) => (
          <Fragment key={key}>
            <div className="col-6 p-0">
              <div className="d-flex align-items-start home-new-count-text-card">
                <img
                  src="/imgs/desktop/home-new/home-augmnt-logo.png"
                  alt="augmnt"
                  className="home-new-augmnt-orange-logo"
                />
                <div>
                  <h3 className="font-44-proxima-nova-800 home-new-count-text-card-text1">
                    {data.count}+
                  </h3>
                  <p className="font-24-nunito-sans-400 home-new-count-text-card-text2 home-new-color-black">
                    {data.text}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  };
  return (
    <div className="home-new-fold-one-section">
      <div className="text-right">
        <img
          src={"/imgs/desktop/home-new/home-fold-one.png"}
          alt="fold one"
          className="home-new-fold-one"
        />
      </div>
      <div className="home-new-fold-one-section__text">
        <h5 className="d-flex align-items-center font-24-nunito-sans-400">
          On{" "}
          <span className="font-24-nunito-sans-700 text-color-orange">
            {" "}
            Slack{" "}
          </span>
          <img
            src={"/imgs/desktop/home-new/home-hash-icon.png"}
            alt="hash"
            className="home-new-hash-icon"
          />
        </h5>
        <h2 className="font-44-proxima-nova-800 home-new-community-text home-new-color-black">
          A community <span className="text-color-orange">for Tech agency</span>
          <br /> founders,{" "}
          <span className="text-color-orange">by tech agency founders</span>
        </h2>
        <button className="home-new-orange-btn">Request Invite</button>
        {renderCountTextBlock()}
      </div>
    </div>
  );
}
