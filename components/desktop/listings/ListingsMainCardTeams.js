import React from "react";

let array = [
  "/imgs/desktop/listings/one.png",
  "/imgs/desktop/listings/two.png",
  "/imgs/desktop/listings/three.png",
  "/imgs/desktop/listings/four.png",
  "/imgs/desktop/listings/five.png",
  "/imgs/desktop/listings/seven.png",
  "/imgs/desktop/listings/ten.png",
  "/imgs/desktop/listings/nine.png",
  "/imgs/desktop/listings/eleven.png",
  "/imgs/desktop/listings/twelve.png",
  "/imgs/desktop/listings/thirtin.png"
]


export default function ListingsMainCardTeams({ title, count }) {


  const showRandomImageOne = () => {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex]
    
  };

  const showRandomImageTwo = () => {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex]
    
  };

  const showRandomImageThree = () => {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex]
    
  };

  return (
    <div className="col-5 d-flex align-items-center flex-nowrap listings-main-card__teamBlock">
      <h5 className="listings-main-card__teams-text1">{title}</h5>
      <div className="d-flex align-items-center listings-main-card__team-member-block">
        <img
          src={showRandomImageOne()}
          alt="member"
        />
        <img
          src={showRandomImageTwo()}
          alt="member"
        />
        <img
          src={showRandomImageThree()}
          alt="member"
        />
      </div>
      <div className="listings-main-card__teams-count-block">
        <span>{count}</span>
      </div>
    </div>
  );
}
