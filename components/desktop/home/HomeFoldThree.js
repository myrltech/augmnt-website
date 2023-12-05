import React from "react";
// import { Fragment } from "react";

// const dummyTextArray = [
//   {
//     text: "Project ready to go but no resources available ? Hire immediately from other agencies benches",
//     customWidth: "home-new-fold-three-paraOne",
//   },
//   {
//     text: "External leads from multiple (publicly available) sources are gathered by our team and posted on a dedicated channel",
//     customWidth: "home-new-fold-three-paraTwo",
//   },
//   {
//     text: "Grow and expand your network, meet, chat and hangout with other founders from your city, and others.",
//     customWidth: "home-new-fold-three-paraThree",
//   },
//   {
//     text: "Deploy 'benched' resources to other agencies' prjects that may need them",
//     customWidth: "home-new-fold-three-paraFour",
//   },
// ];

export default function HomeFoldThree({ id }) {
  /*==========================================================================
                             renderBlock
  =========================================================================*/
  const renderBlock = () => {
    return (
      <div
        className="d-flex mobile-flex-col align-items-center mobile-col-left  justify-content-between home-new-fold-three-block-one"
        id={id}
      >
        <div className="d-block d-md-none">
          <img
            src={
              "/imgs/mobile/home-new/home-mobile-fold-three-block-one-img.png"
            }
            alt=" Birds of a feather slack together "
            className="home-new-fold-three-img-one"
          />
        </div>
        <div className="home-new-fold-three-block-one-content-section">
          <p className="font-44-proxima-nova-800 home-new-color-black home-new-fold-three-title-1">
            Birds of a feather slack <br />
            together
          </p>
          <p className="font-24-nunito-sans-400 home-new-color-black home-new-fold-three-block-one-text1">
            Why hustle alone when you can join our community ? Network, connect,
            <br /> collaborate, learn, optimise, get leads, and share resources
          </p>
          <a
            href="https://forms.gle/ByvmHom9SWsiat8r7"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="home-new-orange-btn text-center">
              Request Invite
            </div>
          </a>

          {/* <button className="home-new-orange-btn home-new-orange-btn--fold-two">
            Request Invite
          </button> */}
        </div>
        <div className="d-none d-md-block">
          <img
            src={"/imgs/desktop/home-new/home-fold-three-block-one-img.png"}
            alt=" Birds of a feather slack together "
            className="home-new-fold-three-img-one"
          />
        </div>
      </div>
    );
  };

  // /*==========================================================================
  //                            renderBlockTwo
  // =========================================================================*/
  // const renderBlockTwo = () => {
  //   return (
  //     <div
  //       className="d-flex mobile-flex-col align-items-center mobile-col-left justify-content-between home-new-fold-three-block-two"
  //       id="useCases"
  //     >
  //       <div className="home-new-fold-three-block-two__img d-none d-md-block">
  //         <img
  //           src="/imgs/desktop/home-new/home-fold-three-img.png"
  //           alt="home fold three"
  //         />
  //       </div>
  //       <div className="home-new-fold-three-block-two__img d-block d-md-none">
  //         <img
  //           src="/imgs/mobile/home-new/home-mobile-fold-three-img.png"
  //           alt="home fold three"
  //         />
  //       </div>
  //       <div className="home-new-fold-three-content-block-two">
  //         <h3 className="font-44-proxima-nova-800 home-new-color-black">
  //           <span className="text-color-orange"> Use</span> Cases
  //         </h3>
  //         {dummyTextArray.map((data, key) => (
  //           <Fragment key={key}>
  //             <p
  //               className={`font-24-proxima-nova-400 home-new-fold-three-block-two-para ${data.customWidth}`}
  //             >
  //               {data.text}
  //             </p>
  //           </Fragment>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <>
      {renderBlock()}
      {/* {renderBlockTwo()} */}
    </>
  );
}
