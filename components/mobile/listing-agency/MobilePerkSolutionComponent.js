import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

//imgs
const sittingPerson = "/imgs-agency/desktop/listings/siting-person.svg";
const star = "/imgs-agency/desktop/listings/star-icon.svg";

//data
const perkData = [
  {
    heading: "deploy",
    des: (
      <>
        <span className="text-color-orange"> Rent out </span>your engineers on
        <span className="text-color-orange"> short-term </span>
        contracts to other agencies to benefit during lean periods.
      </>
    ),
  },
  {
    heading: "network",
    des: (
      <>
        Meet accomplished <span className="text-color-orange"> founders</span>{" "}
        of other agencies, expand your network explore new opportunities.{" "}
      </>
    ),
  },
  {
    heading: "partner",
    des: (
      <>
        Get access to{" "}
        <span className="text-color-orange"> Exclusive deals </span>
        resulting from our partnerships with top SAAS, PAAS and IAAS firms.{" "}
      </>
    ),
  },
  {
    heading: "whitelabel",
    des: (
      <>
        <span className="text-color-orange"> Hire engineers </span> on{" "}
        <span className="text-color-orange"> short-term</span> contract basis
        from other agenices and whitelabel them to your clients.
      </>
    ),
  },
  {
    heading: "grow",
    des: (
      <>
        Get access to{" "}
        <span className="text-color-orange"> Premium, verified </span>
        leads from live technology requirements of top SAAS and enterprise
        firms.{" "}
      </>
    ),
  },
  {
    heading: "hire",
    des: (
      <>
        Access <span className="text-color-orange"> virtual talent</span> pools
        that’s available on short notice.
      </>
    ),
  },
];

const MobilePerkSolutionComponent = () => {
  return (
    <div id="perks">
      <div className="perk-sitting-person-section d-flex align-items-end relative">
        <img
          src={sittingPerson}
          alt="sitting person"
          className="perk-sitting-person-img"
        />
        <h4 className="mobile-font-40-proxima-800 text-color-orange perk-absolute-text">
          The
        </h4>
        <h3 className="mobile-font-64-proxima-800 text-color-orange">Perks</h3>
      </div>
      <div className="perk-solution-section">
        <Accordion allowZeroExpanded>
          {perkData.map((data, key) => (
            <AccordionItem key={key}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <img src={star} alt="star" className="perk-star-img" />
                  <span className="mobile-font-28-permanet-400 text-color-pure-black">
                    {data.heading}
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="mobile-font-14-gloria-regular">{data.des} </p>{" "}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MobilePerkSolutionComponent;
