import React, { Fragment } from "react";

const techCommentArray = [
  {
    para: "I’ve been able to find some great projects on Augmnt. I’d recommend every tech agency to join this network.",
    img: "./imgs/mobile/home-new/profile-img-1.png",
    founderName: "Rohnit Roy",
    companyName: "Founder At C2B",
  },
  {
    para: "Augmnt is THE community where you need to be if you’re a founder of a tech services firm. Tremendous value - not only have we found great resources for short term contracts but have also found some great projects.",
    img: "./imgs/mobile/home-new/profile-img-3.png",
    founderName: "Chandra Prakash",
    companyName: "Founder At C2B",
  },
  {
    para: "Great amounts of value present by being a part of this network. We recently had 12 React developers and no project to place them on, Luckily we found Augmnt.",
    img: "./imgs/mobile/home-new/profile-img-2.png",
    founderName: "Karan Bisht",
    companyName: "Founder at Resource Pool",
  },
  {
    para: "We were running short on Golang developers on a critical government project. The Augmnt network helped us by filling the positions in just 4 days. Unbelievable Value",
    img: "./imgs/mobile/home-new/profile-img-4.png",
    founderName: "Bhanu Pratap",
    companyName: "Founder at Zuriets",
  },
  {
    para: "If you’re a tech service company, you need to be on Augmnt. Finding resources as well Projects is a breeze. Immense value..",
    img: "./imgs/mobile/home-new/profile-img-5.png",
    founderName: "Deepak Thapa",
    companyName: "Founder At Daynil Group",
  },
];
export default function HomeFoldTwoForMobile() {
  /*===============================================================
                        founderNameBlock
   ================================================================*/
  const founderNameBlock = (img, name, founder) => {
    return (
      <>
        <div className="d-flex">
          <img src={img} alt={name} className="john-mayor-img" />
          <div>
            <h4 className="home-new-testomonial-card-one-text2 home-new-color-black">
              {name ? name : "John Mayor"}
            </h4>
            <h5 className="home-new-testomonial-card-one-text3 home-new-color-black">
              {founder ? founder : "Founder of Myrl Tech"}
            </h5>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className="d-block d-md-none home-new-mobile-fold-two"
      // id="testimonials"
    >
      <h2 className="font-36-proxima-nova-700 home-new-color-black">
        Tech Agencies Have Found Immense Value
      </h2>
      <div className="home-new-mobile-fold-two-testomonial-img">
        <img
          src="./imgs/desktop/home-new/home-testomonial-img.png"
          alt="testomonial"
          // className="home-new-testomonial-img"
        />
      </div>
      <div className="text-center">
        <img
          src={"./imgs/desktop/home-new/home-chat-icon.png"}
          alt="chat icon"
          className="home-new-chat-icon"
        />
      </div>
      {techCommentArray.map((data, key) => (
        <Fragment key={key}>
          <div
            className={`home-new-mobile-testimonals-card ${
              key % 2 === 0 && "home-new-mobile-testimonals-card-2"
            }`}
          >
            <h4 className="home-new-mobile-testimonals-text-1">{data.para}</h4>
            {founderNameBlock(data.img, data.founderName, data.companyName)}
          </div>
        </Fragment>
      ))}
      <a
        href="https://forms.gle/ByvmHom9SWsiat8r7"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="home-new-orange-btn text-center">Request Invite</div>
      </a>
    </div>
  );
}
