import React from "react";

//imgs
const star = "/imgs/desktop/listings/star-icon.svg";
// const spring = "/imgs/desktop/listings/spring-icon.svg";
const sittingPerson = "/imgs/desktop/listings/siting-person.svg";
// const gauge = "/imgs/desktop/listings/gauge-icon.svg";
const perkOne = "/imgs/desktop/listings/perk-arrow-one.svg";
const perkTwo = "/imgs/desktop/listings/perk-arrow-two.svg";
const perkThree = "/imgs/desktop/listings/perk-arrow-three.svg";
const perkFour = "/imgs/desktop/listings/perk-arrow-four.svg";
const perkFive = "/imgs/desktop/listings/perk-arrow-five.svg";
const perkSix = "/imgs/desktop/listings/perk-arrow-six.svg";

//array
const dataArrayOne = [
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
];

const dataArrayTwo = [
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

const ListingPerkComponent = () => {
  const renderCard = (heading, des) => {
    return (
      <div className="d-flex align-items-start">
        <img src={star} alt="star" className="perk-star-icon" />
        <div>
          <h3 className="font-64-permanentMarker text-color-pure-black">
            {heading}
          </h3>
          <p className="font-24-gloria text-color-pure-black pt-10">{des}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="perk-section" id="perks">
      <h2 className="font-128-proxima-nova-800 text-color-orange text-center">
        The Perks
      </h2>
      <div className="d-flex perk-content-section align-items-center">
        {/* left */}
        <div className="col-4 p-0">
          {dataArrayOne.map((data, key) => (
            <div key={key} className="pt-40">
              {renderCard(data.heading, data.des)}
            </div>
          ))}
        </div>
        {/* middle */}
        <div className="col-4 text-center p-0 relative">
          {/* <img src={spring} alt="spring" className="perk-spring-img" /> */}
          <img src={sittingPerson} alt="sitting" className="perk-sitting-img" />
          {/* <img src={gauge} alt="gauge" className="perk-gauge-img" /> */}
          {/* perkone */}
          <div className="perk-arrow-one">
            <img src={perkOne} alt="perk" />
          </div>
          {/* perktwo */}
          <div className="perk-arrow-two">
            <img src={perkTwo} alt="perk" />
          </div>
          {/* perkThree */}
          <div className="perk-arrow-three">
            <img src={perkThree} alt="perk" />
          </div>
          {/* perkFour */}
          <div className="perk-arrow-four">
            <img src={perkFour} alt="perk" />
          </div>
          {/* perkFive */}
          <div className="perk-arrow-five">
            <img src={perkFive} alt="perk" />
          </div>
          {/* perkSix */}
          <div className="perk-arrow-six">
            <img src={perkSix} alt="perk" />
          </div>
        </div>
        {/* right */}
        <div className="col-4 p-0">
          {dataArrayTwo.map((data, key) => (
            <div key={key} className="pt-40">
              {renderCard(data.heading, data.des)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPerkComponent;
