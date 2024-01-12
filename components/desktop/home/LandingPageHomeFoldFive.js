import React, { Fragment } from "react";

const augmntArray = [
  {
    // title: "Saving Costs",
    // para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs.",
    title: "Save Time, Save Money",
    para: "Hire extremely talented engineers from India at great prices. Build out a super talented team for your startup by leveraging our network.",
    icon: "/imgs/desktop/icons/wallet-icon.svg",
    iconClass: "home-wallet-icon",
  },
  {
    // title: "Rewarding",
    // para: "Get featured on top of tech partners’ feeds - all you have to do is post high-quality requirements often and our algorithm will prioritize your listings more often.",
    title: "Efficient",
    para: "Hiring short-term engineering contract developers makes it easy for you to experiment more and pivot faster. Imagine hiring 10 React Native engineers and having to shift to Flutter - big pain! ",
    icon: "/imgs/desktop/icons/star-hand-icon.svg",
    iconClass: "home-star-hand-icon",
  },
  {
    // title: "Ease of Scaling",
    // para: "Connect with not just the best teams but also the most cost efficient teams. Save on long-term recurring costs.",
    title: "Scale Easy",
    para: "Scale up or down easily, based on your engineering requirements. Perfect for high-growth startups that need high quality engineering.",
    icon: "/imgs/desktop/icons/weight-icon2.svg",
    iconClass: "home-weight-icon",
  },
  {
    title: "Cost Effective",
    para: "Hire engineers big talent pools in India, essentially the same Silicon Valley talent, but at highly affordable prices.",
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
