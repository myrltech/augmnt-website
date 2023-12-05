import React from "react";

//data
const img1 = "/imgs/desktop/home-new/profile-img-1.png";
const img2 = "/imgs/desktop/home-new/profile-img-2.png";
const img3 = "/imgs/desktop/home-new/profile-img-3.png";
const img4 = "/imgs/desktop/home-new/profile-img-4.png";
const img5 = "/imgs/desktop/home-new/profile-img-5.png";

const paraForCard1 =
  "I’ve been able to find some great projects on Augmnt. I’d recommend every tech agency to join this network.";

const paraForCard2 =
  "Great amounts of value present by being a part of this network. We recently had 12 React developers and no project to place them on, Luckily we found Augmnt.";

const paraForCard3 =
  "Augmnt is THE community where you need to be if you’re a founder of a tech services firm. Tremendous value - not only have we found great resources for short term contracts but have also found some great projects.";

const paraForCard4 =
  "We were running short on Golang developers on a critical government project. The Augmnt network helped us by filling the positions in just 4 days. Unbelievable Value!";

const paraForCard5 =
  "If you’re a tech service company, you need to be on Augmnt. Finding resources as well Projects is a breeze. Immense value!";

export default function HomeFoldTwoForDesktop() {
  /*===============================================================
                        founderNameBlock
   ================================================================*/
  const founderNameBlock = (img, name, founder) => {
    return (
      <div className="d-flex home-new-fold-two-founder-block">
        <img src={img} alt={name} className="john-mayor-img" />
        <div>
          <h4 className="font-20-nunito-sans-600 home-new-testomonial-card-one-text2 home-new-color-black">
            {name ? name : "John Mayor"}
          </h4>
          <h5 className="font-18-nunito-sans-400 home-new-testomonial-card-one-text3 home-new-color-black">
            {founder ? founder : "Founder of Myrl Tech"}
          </h5>
        </div>
      </div>
    );
  };

  /*=============================================================
                       renderCardTwo
  =============================================================*/
  const renderCardTwo = (para, img, founderOf, founderName, extraClass) => {
    return (
      <div className={`home-new-testomonial-card-one ${extraClass}`}>
        <p className="font-24-nunito-sans-600 home-new-testomonial-card-one-text1 home-new-color-black">
          {para ? (
            para
          ) : (
            <>
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
            </>
          )}
        </p>
        {founderNameBlock(img, founderOf, founderName)}
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
        {renderCardTwo(paraForCard1, img1, "Rohnit Roy", "Founder At C2B")}
        {/** card 2 */}
        {renderCardTwo(
          paraForCard2,
          img2,
          "Karan Bisht",
          "Founder of Resource Pool"
        )}
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
        {renderCardTwo(
          paraForCard3,
          img3,
          "Chandra Prakash",
          "Founder At C2B",
          "home-new-fold-two-row-two-para"
        )}
      </div>
    );
  };

  /*===============================================================
                        renderRowThree
   ================================================================*/
  const renderRowThree = () => {
    return (
      <div className="d-flex justify-content-between align-items-end  home-new-fold-tow-row-one pt-0 home-new-fold-tow-row-one-circle-3">
        {renderCardTwo(
          paraForCard4,
          img4,
          "Bhanu Pratap",
          "Founder At Zuriets",
          "home-new-fold-two-row-three-card"
        )}
        {/* <div className=""> */}
        <a
          href="https://forms.gle/ByvmHom9SWsiat8r7"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="home-new-orange-btn home-new-orange-btn--fold-two text-center">
            Request Invite
          </div>
        </a>
        {/* <button className="home-new-orange-btn home-new-orange-btn--fold-two"> */}
        {/* Request Invite */}
        {/* </button> */}
        {renderCardTwo(
          paraForCard5,
          img5,
          "Deepak Thapa",
          "Founder At Daynil Group"
        )}
      </div>
      // </div>
    );
  };
  /*============================================================== =
                        return
   ================================================================*/
  return (
    <div
      className="home-new-fold-two-main-section d-none d-md-block"
      // id="testimonials"
    >
      <div className="text-center">
        <img
          src="/imgs/desktop/home-new/home-testomonial-img.png"
          alt="testomonial"
          className="home-new-testomonial-img"
        />
        <h3 className="font-64-proxima-nova-800 home-new-testomonial-title home-new-color-black">
          {/* Some title for the testimonials */}
          Tech Agencies Have Found Immense Value
        </h3>
      </div>
      {renderRowOne()}
      {renderRowTwo()}
      {renderRowThree()}
    </div>
  );
}
