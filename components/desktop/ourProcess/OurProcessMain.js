import React from "react";
import OurProcessMainFold1 from "./OurProcessMainFold1";
import OurProcessMainHowItWorks from "./OurProcessMainHowItWorks";
import OurProcessMainUsualWay from "./OurProcessMainUsualWay";
import OurProcessMainWhyAugment from "./OurProcessMainWhyAugment";
import OurProcessMainWhyAugmentMobile from "./OurProcessMainWhyAugmentMobile";

export default function OurProcessMain() {
  return (
    <>
      <div className="our-process-main-bg">
        <OurProcessMainFold1 />
        <OurProcessMainUsualWay />
        {/* why augmnt */}
        <div className="our-process-why-augment-main">
          <h2 className="our-process-fold-title-text-1 font-18-proxima-nova-700 mb-27 text-md-center">
            why augmnt?
          </h2>
          <h3 className="font-48-poiret-one-400 text-md-center our-process-why-augment-main__title">
            Because we offer-
          </h3>
          <div className="d-none d-md-block">
            <OurProcessMainWhyAugment />
          </div>
          <div className="d-block d-md-none">
            <OurProcessMainWhyAugmentMobile />
          </div>
        </div>
        {/* why augmnt end */}
        <OurProcessMainHowItWorks />
      </div>
    </>
  );
}
