import React from "react";

//img
const downwordArrow = "./imgs/desktop/listings/white-downword-arrow.svg";
const underline = "./imgs/desktop/listings/solution-underline.svg";

//array
const dataArray = [
  {
    count: "450+",
    para: (
      <>
        Agency <span className="text-color-orange"> Founders </span> joined in
        the community.
      </>
    ),
  },
  {
    count: "1 mn",
    para: (
      <>
        Business <span className="text-color-orange"> Exchanged </span> every
        month, amongst agencies.{" "}
      </>
    ),
  },
  {
    count: "80+",
    para: (
      <>
        Requirements <span className="text-color-orange"> Generated </span>
        each month.
      </>
    ),
  },
  {
    count: "30+",
    para: (
      <>
        External <span className="text-color-orange"> Leads </span> shared per
        month{" "}
      </>
    ),
  },
];

//imgs
const announcementPerson =
  "/imgs/desktop/listings/announcement-person-icon.svg";

const augmntLogo = "/imgs/desktop/listings/augmnt-agency-logo.svg";

const ListingSolutionsComponent = () => {
  return (
    <div className="listing-solution-section" id="solution">
      <div className="d-flex align-items-center justify-content-center">
        <div className="relative">
          <h2 className="font-96-permanentMarker">
            Now there’s a <span className="text-color-orange"> solution </span>
          </h2>
          <div className="solution-down-arrow">
            <img src={downwordArrow} alt="down" />
          </div>
          <div className="solution-underline-arrow">
            <img src={underline} alt="underline" />
          </div>
        </div>
        <img
          src={announcementPerson}
          alt="announcement"
          className="announcement-img"
        />
      </div>
      {/* logo slack */}
      <div className="d-flex justify-content-center align-items-start">
        <div className="relative">
          <img
            src={augmntLogo}
            alt="augmnt logo"
            className="solution-augmnt-logo"
          />
          <span className="font-48-proxima-nova-700 text-color-orange solution-agency-title">
            Agency
          </span>
        </div>
        <div>
          <div className="d-flex align-items-start pt-40 ">
            <img
              src={"/imgs/desktop/home-new/home-hash-icon.png"}
              alt="hash"
              className="solution-hash-icon"
            />
            <div>
              <h5 className="font-40-coda text-color-orange">Slack</h5>
              <h4 className="font-40-permanentMarker">communuity</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex solution-data justify-content-between">
        {dataArray.map((data, key) => (
          <div key={key} className="solution-data-card ">
            <h3 className="font-128-pacifico-normal">
              <span className="font-63-pacifico-normal">
                {key === 1 ? "$ " : ""}
              </span>
              {data.count}
            </h3>
            <p className="font-24-gloria pt-10">{data.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingSolutionsComponent;
