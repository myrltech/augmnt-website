import React, { Fragment } from "react";

const augmntArray = [
  {
    // title: "Saving Costs",
    // para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs.",
    title: "Save Time, Save Money",
    para: "Hiring your own team requires long, expensive processes. Accelerate your process by hiring great engineers already working at tech agencies.",
    icon: "/imgs/desktop/icons/wallet-icon.svg",
    iconClass: "home-wallet-icon",
  },
  {
    // title: "Rewarding",
    // para: "Get featured on top of tech partners’ feeds - all you have to do is post high-quality requirements often and our algorithm will prioritize your listings more often.",
    title: "Effective",
    para: "The other quick option is to recruit freelancers. But it’s not the most effective option as freelancers quit at the slightest hint of a challenge.",
    icon: "/imgs/desktop/icons/star-hand-icon.svg",
    iconClass: "home-star-hand-icon",
  },
  {
    // title: "Ease of Scaling",
    // para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs.",
    title: "Scale Easy",
    para: "Since you connect with tech agencies and not individual freelancers, you can quickly scale up your team leveraging your agency’s expertise.",
    icon: "/imgs/desktop/icons/weight-icon.svg",
    iconClass: "home-weight-icon",
  },
  {
    title: "Completely Free",
    para: "Our platform is a 100% free for clients looking to expand their tech teams.",
    icon: "/imgs/desktop/icons/dollar-icon.svg",
    iconClass: "home-dollar-icon",
  },
];

export default function LandingPageHomeFoldFive() {
  return (
    <div className="home-augmnt-advantages-section">
      <h2 className="font-48-poiret-one-400 home-augmnt-advantages-title">
        The Advantages of
      </h2>
      <h2 className="font-64-proxima-nova-700 home-augmnt-advantages-subtitle">
        Using AUGMNT
      </h2>
      <div className="d-flex flex-wrap pt-60">
        {augmntArray.map((data, index) => (
          <Fragment key={index}>
            <div className="home-augmnt-advantages-card relative">
              <div className="home-augmnt-advantages-icon-div">
                <img
                  src={data.icon}
                  alt={data.title}
                  className={data.iconClass}
                />
              </div>
              <h4 className="home-augmnt-advantages-card-title font-24-proxima-nova-700">
                {data.title}
              </h4>
              <p className="home-augmnt-advantages-card-para font-18-nunito-sans-400">
                {data.para}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
