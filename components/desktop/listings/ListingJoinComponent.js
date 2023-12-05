import React from "react";

const downwordArrow = "./imgs/desktop/listings/down-arrow.svg";
const star = "./imgs/desktop/listings/star-icon.svg";
const coffee = "./imgs/desktop/listings/coffee.svg";
const money = "./imgs/desktop/listings/money.svg";

const ListingJoinComponent = () => {
  return (
    <div className="text-center join-section relative" id="join">
      <h2 className="text-color-pure-black font-96-permanentMarker mobile-font-32-permanet-400">
        SO WHAT ARE YOU <span className="text-color-orange"> WAITING </span>
        FOR?
      </h2>
      <div className="join-down-arrow">
        <img src={downwordArrow} alt="downarrow" />
      </div>
      <a
        href="https://form.jotform.com/221702664661050"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="orange-btn orange-btn--join font-24-nunito-sans-700">
          JOIN NOW!
        </button>
      </a>
      <div className="join-text-section-one">
        <div className="font-48-permanentMarker text-color-gray d-flex">
          <img src={star} alt="star" className="join-star-icon" />
          <span>
            Millions of dollars of <br /> value
          </span>
        </div>
      </div>
      <div className="join-text-section-two">
        <h5 className="font-54-permanentMarker text-color-gray">
          for the price of{" "}
          <span className="text-color-orange"> 10 coffees</span> <br /> Annually
          !!{" "}
        </h5>
      </div>
      <div className="join-money-img-section">
        <img src={money} alt="money" />
      </div>
      <div className="join-coffee-img-section">
        <img src={coffee} alt="cofee" />
      </div>
    </div>
  );
};

export default ListingJoinComponent;
