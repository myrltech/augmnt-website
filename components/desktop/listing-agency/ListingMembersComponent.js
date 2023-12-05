import React from "react";
import { memberData } from "../../../store/memberData";

const quote = "/imgs-agency/desktop/listings/quote-icon.svg";

//img

const ListingMembersComponent = () => {
  const renderMemberCard = (data) => {
    const { profile, name, position, socialIcon, starCount, heading, desc } =
      data;

    return (
      <div className="member-card">
        {/* profile data */}

        <div className="d-flex align-items-start">
          <div className="col-3">
            <img
              src={quote}
              alt="quote-icon"
              className="member-card-quote-icon"
            />
          </div>
          <div className="col-9">
            <h3 className="font-24-proxima-nova-700 pt-1">{data.heading}</h3>
            <p className="font-18-proxima-nova-400 pt-10">{data.desc}</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-20">
          <div className="d-flex align-items-center">
            <img src={data.profile} alt="profile" className="profile-img" />
            <div className="text-left">
              <h5 className="font-24-proxima-nova-700 d-flex align-items-center w-fit">
                {data.name}{" "}
                <img
                  src={data.socialIcon}
                  alt="social icon"
                  className="social-icon"
                />{" "}
              </h5>
              <p className="font-18-proxima-nova-400">{data.position}</p>
            </div>
          </div>
          <h5 className="d-flex font-14-proxima-nova-700">
            {data.starCount}
            <span className="d-flex member-card__star">
              {data.starCountArray.map((data, key) => (
                <div key={key}>
                  <i className={`fa ${data}`} />
                </div>
              ))}
            </span>
          </h5>
        </div>
      </div>
    );
  };
  return (
    <div id="testimonials">
      <h2 className="font-96-permanentMarker text-center text-color-pure-black pt-50">
        our members have grown{" "}
        <span className="text-color-orange font-128-permanentMarker">10x</span>
      </h2>
      {/* <div className="d-flex flex-wrap pt-30">
        {memberData.map((data, key) => (
          <div key={key} className="col-3">
            {renderMemberCard(data)}
          </div>
        ))}
      </div> */}
      <div className="member-card-main-section">
        {memberData.map((data, key) => (
          <div key={key} className="col-4">
            {renderMemberCard(data)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingMembersComponent;
