import React from "react";

export default function ListingsMainCardTeams({ title, count }) {
  return (
    <div className="col-5 d-flex align-items-center flex-nowrap listings-main-card__teamBlock">
      <h5 className="listings-main-card__teams-text1">{title}</h5>
      <div className="d-flex align-items-center listings-main-card__team-member-block">
        <img
          src="/imgs/desktop/listings/dummy-teams-member-1.png"
          alt="member"
        />
        <img
          src="/imgs/desktop/listings/dummy-teams-member-2.png"
          alt="member"
        />
        <img
          src="/imgs/desktop/listings/dummy-teams-member-2.png"
          alt="member"
        />
      </div>
      <div className="listings-main-card__teams-count-block">
        <span>{count}</span>
      </div>
    </div>
  );
}
