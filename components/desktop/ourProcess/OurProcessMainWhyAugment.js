import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurProcessMainWhyAugmentCard from "./OurProcessMainWhyAugmentCard";

export default function OurProcessMainWhyAugment() {
  return (
    <div className="common-react-tabs">
      <div className="d-flex flex-nowrap justify-content-between w-100">
        {/* <Tabs> */}
        {/* <TabList> */}
        {/* <Tab> */}
        <h5 className="font-24-poiret-one-400">
          {/* <b className="our-process-fold-title-text-1 font-18-proxima-nova-700"> */}
          {/* 1. */}
          {/* </b>{" "} */}
          Curated top Agencies
          {/* </Tab> */}
        </h5>
        {/* <Tab> */}
        <h5 className="font-24-poiret-one-400">
          {/* <b className="our-process-fold-title-text-1 font-18-proxima-nova-700"> */}
          {/* 2. */}
          {/* </b>{" "} */}
          Thouroughly vetted
          {/* </Tab> */}
        </h5>
        {/* <Tab> */}
        <h5 className="font-24-poiret-one-400">
          {/* <b className="our-process-fold-title-text-1 font-18-proxima-nova-700"> */}
          {/* 3. */}
          {/* </b>{" "} */}
          Assisted onboarding
          {/* </Tab> */}
        </h5>
        {/* <Tab> */}
        <h5 className="font-24-poiret-one-400">
          {/* <b className="our-process-fold-title-text-1 font-18-proxima-nova-700"> */}
          {/* 4. */}
          {/* </b>{" "} */}
          Deep Industry Experience
          {/* </Tab> */}
        </h5>{" "}
        {/* </TabList> */}
        {/* <TabPanel> */}
      </div>
      <div className="pt-35">
        <OurProcessMainWhyAugmentCard
          title="Curated top Agencies"
          desc="Over the years, we have partnered with over 500+ agencies - vetted, and curated by geographies, skills, price range, experience."
          icon="/imgs/desktop/our-process/curated-top-agencies-icon.svg"
        />
        {/* </TabPanel> */}
        {/* <TabPanel> */}
        <OurProcessMainWhyAugmentCard
          title={
            <>
              {/* font-48-proxima-nova-700 */}
              Thouroughly <b className="font-36-proxima-nova-700">Vetted</b>
            </>
          }
          // desc="Tech talent at our partner agencies go through our proprietary skill tests. We interview them on their knowledge, and soft skills. Only the creme de la creme makes it to our listings. Great people that adapt quickly to your work environment are guaranteed."
          desc="Tech talent at our partner agencies go through our proprietary skill tests. We interview them on their knowledge, and soft skills. Only the creme de la creme makes it to our listings. Great people that adapt quickly to your work environment are guaranteed."
          icon="/imgs/desktop/our-process/thouroughly-vetted-icon.svg"
        />
        {/* </TabPanel> */}
        {/* <TabPanel> */}
        <OurProcessMainWhyAugmentCard
          title={
            <>
              <b className="font-36-proxima-nova-700">Assisted</b> Onboarding
            </>
          }
          desc="We do not just make introductions and leave the table. We get your project up and running. We make sure you are matched with the ‘right fits’ and that they hit the ground running. Your new team will be on their way within days."
          // desc="We do not just make introductions and leave the table. We get your project up and running. We make sure you are matched with the ‘right fits’ and that they hit the ground running. Your new team will be on their way within days."
          icon="/imgs/desktop/our-process/assisted-onboarding-icon.svg"
        />
        {/* </TabPanel> */}
        {/* <TabPanel> */}
        <div className="relative">
          <OurProcessMainWhyAugmentCard
            title={
              <>
                Deep{" "}
                <b className="font-36-proxima-nova-700"> Industry Experience</b>
              </>
            }
            desc="Founders of Augmnt are SAAS founders themselves and understand the challenges of hiring, onboarding and assembling a team of engineers. Having decades of rich experience we’ve settled at the best way of hiring engineers, when you need them."
            // desc="Being agency founders, between themselves, the founders have more than 10 years of hiring and deploying tech talent. We have made the mistakes and suffered the consequences so you do not have to. We promise you a smooth execution of your new project."
            icon="/imgs/desktop/our-process/deep-industry-experience-icon.svg"
          />
        </div>
        {/* </TabPanel> */}
        {/* </Tabs> */}
      </div>{" "}
    </div>
  );
}
