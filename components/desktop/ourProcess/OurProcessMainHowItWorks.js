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
        Build out your remote engineering team, reliably
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
            Sign up as a client and let us know your requirements
          </p>
        </div>

        <div className="our-process-how-it-works-main__block2">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            02
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
            We Build out your team
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            We find engineers for your requirements from our existing set of
            engineers or from our network or from our partner agencies and help
            you build out a killer team.
          </p>
        </div>

        <div className="our-process-how-it-works-main__block4">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            04
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
          Scale up or Scale down
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Depending on your product requirements we make it super simple for you to scale up or scale down the number of engineers on your team.
          </p>
        </div>

        <div className="our-process-how-it-works-main__block3">
          <h3 className="font-36-proxima-nova-900 our-process-how-it-works-main__text1 relative">
            03
          </h3>
          <h4 className="our-process-how-it-works-main__text2 font-18-nunito-sans-600">
          We Manage your team
          </h4>
          <p className="our-process-how-it-works-main__text3 font-18-nunito-sans-400">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, */}
            Managing team, replacing engineers, payments,
local taxes, settlements everything is taken care of.
          </p>
        </div>
      </div>
    </div>
  );
}
