import React from "react";

export default function HomeFoldTwo() {
  /*===============================================================
                        founderNameBlock
   ================================================================*/
  const founderNameBlock = () => {
    return (
      <>
        <div className="d-flex">
          <img
            src={"/imgs/desktop/home-new/john-mayor-img.png"}
            alt="john mayor"
            className="john-mayor-img"
          />
          <div>
            <h4 className="font-20-nunito-sans-600 home-new-testomonial-card-one-text2 home-new-color-black">
              John Mayor
            </h4>
            <h5 className="font-18-nunito-sans-400 home-new-testomonial-card-one-text3 home-new-color-black">
              Founder of Myrl Tech
            </h5>
          </div>
        </div>
      </>
    );
  };

  /*=============================================================
                       renderCardTwo
  =============================================================*/
  const renderCardTwo = () => {
    return (
      <div className="home-new-testomonial-card-one">
        <p className="font-18-nunito-sans-600 home-new-testomonial-card-two-text1 home-new-color-black">
          Lorem ipsum dolor sit amet,{" "}
          <span className="font-18-nunito-sans-800 text-color-orange">
            {" "}
            consectetur
          </span>{" "}
          adipiscing elit, sed do{" "}
          <span className="font-18-nunito-sans-800 text-color-orange home-new-testomonial-card-one-text-ul">
            eiusmod tempor
          </span>{" "}
          incididunt ut labore et dolore magna aliqua.
        </p>
        {founderNameBlock()}
      </div>
    );
  };
  /*===============================================================
                        renderRowOne
   ================================================================*/
  const renderRowOne = () => {
    return (
      <div className="d-flex justify-content-between home-new-fold-tow-row-one home-new-fold-tow-row-one-cricle">
        {/** card 1 */}
        <div className="home-new-testomonial-card-one">
          <p className="font-24-nunito-sans-600 home-new-testomonial-card-one-text1 home-new-color-black">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-24-nunito-sans-800 text-color-orange">
              {" "}
              consectetur
            </span>{" "}
            adipiscing elit, sed do{" "}
            <span className="font-24-nunito-sans-800 text-color-orange home-new-testomonial-card-one-text-ul">
              eiusmod tempor
            </span>{" "}
            incididunt ut labore et dolore magna aliqua.
          </p>
          {founderNameBlock()}
        </div>
        {/** card 2 */}
        {renderCardTwo()}
      </div>
    );
  };

  /*===============================================================
                        renderRowTwo
   ================================================================*/
  const renderRowTwo = () => {
    return (
      <div className="d-flex justify-content-center home-new-testomonial-row-2">
        <div className="home-new-chat-icon-section">
          <img
            src={"/imgs/desktop/home-new/home-chat-icon.png"}
            alt="chat icon"
            className="home-new-chat-icon"
          />
        </div>
        {/** card 3 */}
        <div className="home-new-testomonial-card-one">
          <p className="font-36-nunito-sans-600 home-new-testomonial-card-three-text1 home-new-color-black">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-36-nunito-sans-800 text-color-orange">
              {" "}
              consectetur
            </span>{" "}
            adipiscing elit, sed do{" "}
            <span className="font-36-nunito-sans-800 text-color-orange home-new-testomonial-card-one-text-ul">
              eiusmod tempor
            </span>{" "}
            incididunt ut labore et dolore magna aliqua.
          </p>
          {founderNameBlock()}
        </div>
      </div>
    );
  };

  const renderRowThree = () => {
    return (
      <div className="d-flex justify-content-between align-items-end home-new-fold-tow-row-one home-new-fold-tow-row-one-circle-3">
        {renderCardTwo()}
        <button className="home-new-orange-btn home-new-orange-btn--fold-two">
          Request Invite
        </button>
        {renderCardTwo()}
      </div>
    );
  };
  /*============================================================== =
                        return
   ================================================================*/
  return (
    <div className="home-new-fold-two-main-section">
      <div className="text-center">
        <img
          src="/imgs/desktop/home-new/home-testomonial-img.png"
          alt="testomonial"
          className="home-new-testomonial-img"
        />
        <h3 className="font-64-proxima-nova-800 home-new-testomonial-title home-new-color-black">
          Some title for the testimonials
        </h3>
      </div>
      {renderRowOne()}
      {renderRowTwo()}
      {renderRowThree()}
    </div>
  );
}
