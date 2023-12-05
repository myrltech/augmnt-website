import React from "react";

export default function OurProcessMainHowItWorks() {
  return (
    <div className="our-process-how-it-works-main">
      <h2 className="font-48-poiret-one-400 our-process-how-it-works-main__title relative">
        {/* How does it work? */}
        In a nutshell....
      </h2>
      <p className="font-18-nunito-sans-400 our-process-how-it-works-main__desc text-center">
        {/* Expand your tech team by leveraging resources available at vetted and
        verified tech agencies across the globe using this simple process. */}
        Hire engineers already working at verified tech agencies. Fast
      </p>

      <figure className="our-process-how-it-works-figure">
        <img
          src="/imgs/desktop/our-process/our-process-how-it-works.svg"
          alt=""
        />
      </figure>

      <div className="row mx-0 align-items-start">
        <div className="our-process-how-it-works-main__block1">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            01
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
            Onboard with us
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Sign up as a client, create your account with us.{" "}
          </p>
        </div>

        <div className="our-process-how-it-works-main__block2">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            02
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
            Create &amp; Post Requirements
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Post your requirements. mentioning budget and skills required.{" "}
          </p>
        </div>

        <div className="our-process-how-it-works-main__block4">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            04
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
            Shortlist, Discuss and Finalise
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Find the right agencies for you and get started :D{" "}
          </p>
        </div>

        <div className="our-process-how-it-works-main__block3">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            03
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
            Firms across the world reach you
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Our tech agency partners reach out to you,{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
