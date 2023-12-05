import React from "react";
import { Fragment } from "react";

//arrray
const clientArray = [
  {
    imgPath: "/imgs/desktop/home/nuro-dynamic-ai-logo.png",
    name: "neuro dynamic ai",
    para: "Augmnt has been a lifesaver on multiple occasions. We were in the midst of building our product and needed experienced MLOps talent and were able to find them on Augmnt. You can trust Augmnt.",
    founder: "Amritansh",
    founderImg: "/imgs/desktop/home/neo-dynamic-ceo.svg",
    company: "Founder, NeuroDynamic Ai",
  },
  {
    imgPath: "/imgs/desktop/home/seven-targets-logo.svg",
    name: "seven targets",
    para: "We’ve been using Augmnt since quite a while, and have always been pleasantly surprised by the number of engineers you can tap into through the various tech agencies listed on the platform. Will recommend this to all SAAS firrms.",
    founder: "Sanju Burkule",
    founderImg: "/imgs/desktop/home/seven-targets-ceo.svg",
    company: "CEO, 7Targets.Ai",
  },
  {
    imgPath: "/imgs/desktop/home/super-blog.svg",
    name: "super blog",
    para: "Hire verified engineers for short-term contracts from agencies where they’re already employed? sounded too good to be true. But the Augmnt ecosystem delivers, time and again.",
    founder: "Sai  Krishna",
    founderImg: "/imgs/desktop/home/super-blog-ceo.svg",
    company: "Founder, SuperBlog.Ai",
  },
];

/*=================================================================================================
                                        LandingPageHomeFoldSevenNew
==================================================================================================*/
const LandingPageHomeFoldSevenNew = () => {
  return (
    <>
      <div className="home-fold-seven-section d-flex justify-content-end">
        <h2 className="text-right home-fold-seven-section-img">
          <img
            src="/imgs/desktop/home/home-augmnt-title-text.svg"
            alt="Here’s what our existing clients have said about AUGMNT"
            className="home-augmnt-title-text"
          />
        </h2>
      </div>
      <div className="d-flex justify-content-between home-fold-seven-content-section">
        {clientArray.map((data, key) => (
          <Fragment key={key}>
            <div className="home-fold-seven-card">
              <div className="home-fold-seven-card-img">
                <img
                  src={data.imgPath}
                  alt={data.name}
                  className={key === 0 ? "neuro-dynamic-logo" : ""}
                />
              </div>
              <p className="font-18-nunito-sans-400 pt-30 home-existing-client-card-para relative">
                {data.para}
              </p>
              <div className="home-fold-seven-new-img-text-icon">
                <img
                  src={data.founderImg}
                  alt={data.founder}
                  className="home-existing-client-card-client-img"
                />
                <div>
                  <h5 className="font-14-proxima-nova-700 home-existing-client-card-client-name">
                    {data.founder}
                  </h5>
                  <h6 className="font-14-nunito-sans-400 home-existing-client-card-client-position">
                    {data.company}
                  </h6>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default LandingPageHomeFoldSevenNew;
