import Link from "next/link";
import React, { Fragment } from "react";

const howItWorksArray = [
  {
    // para: "Post your requirements for Product & Engineering Teams.",
    para: "Let us know your requirements for Engineering teams and technologies.",
    imgPath: "/imgs/desktop/home/how-does-it-work-1.svg",
    imgClass: "how-does-it-work-1",
  },
  {
    para: "We shortlist the right engineers for your requirements from our large network.",
    // para: "Discover top resource augmentation firms across the world that match  your requirements.",
    imgPath: "/imgs/desktop/home/how-does-it-work-2.svg",
    imgClass: "how-does-it-work-2",
  },
  {
    para: "We build out your fully managed remote engineering team and we ensure you always have the right engineers working on your project.",
    // para: "Connect with the most competent team and build your product.",
    imgPath: "/imgs/desktop/home/how-does-it-work-3.svg",
    imgClass: "how-does-it-work-3",
  },
];
export default function LandingPageHomeFoldSix() {
  return (
    <>
      <div className="home-fold-six">
        <div>
          <h2 className="font-48-poiret-one-400 home-fold-six-title">
            How does it work?
          </h2>
          <h5 className="font-18-nunito-sans-400 home-fold-six-subtitle">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Onboard Engineering Resources In Just <b> 3 Steps.</b>
          </h5>
          <div>
            {howItWorksArray.map((data, index) => (
              <Fragment key={index}>
                <div
                  className={
                    index === 0
                      ? "d-flex flex-nowrap how-its-work-card-text-img-section align-items-start"
                      : index === 1
                      ? "d-flex flex-nowrap how-its-work-card-text-img-section align-items-end"
                      : "d-flex flex-nowrap how-its-work-card-text-img-section-3 align-items-center"
                  }
                >
                  <div className="text-center home-how-its-work-card-text-section">
                    <h3 className="font-36-nunito-sans-800 home-how-its-work-card-title">
                      {index + 1}
                    </h3>
                    {/*  font-18-nunito-sans-400  */}
                    <p className="font-16-nunito-sans-400 home-how-its-work-card-para">
                      {data.para}
                    </p>
                  </div>
                  <div className="home-how-its-work-card-img-section">
                    <img
                      src={data.imgPath}
                      alt={data.para}
                      className={data.imgClass}
                    />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>{" "}
        </div>
        <div className="how-it-works-main-img-div">
          <img
            src={"imgs/desktop/home/home-how-it-works-main-img.png"}
            alt="home how it works "
            className="how-it-works-main-img"
          />
        </div>
      </div>
      <div className="text-center d-flex justify-content-center">
        <Link href="/our-process">
          <div className="home-fold-six-btn">Learn More &#62;</div>
        </Link>
      </div>
    </>
  );
}
