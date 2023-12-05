import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memberData } from "../../../store/memberData";

//img
// const profile = "/imgs/desktop/listings/dummy-profile.svg";
// const linkedin = "/imgs/desktop/listings/linkedin-icon.svg";
const gauge = "/imgs-agency/desktop/listings/gauge-icon.svg";
const quote = "/imgs-agency/desktop/listings/quote-icon.svg";

const MobileTestimonialsComponent = () => {
  const settings = {
    dots: false,
    multiple: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  /*=====================================================
                    renderCard
=====================================================*/
  const renderCard = (data) => {
    return (
      <div className="member-card">
        <div className="d-flex align-items-start">
          <img
            src={quote}
            alt="quote-icon"
            className="member-card-quote-icon"
          />
          <div>
            <h3 className="mobile-font-16-proxima-nova-700">{data.heading}</h3>
            <p className="mobile-font-10-proxima-nova-400 pt-10">{data.desc}</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-20">
          <div className="d-flex align-items-start">
            <img src={data.profile} alt="profile" className="profile-img" />
            <div className="text-left">
              <h5 className="mobile-font-14-proxima-nova-700 d-flex align-items-center justify-content-start w-fit">
                {data.name}{" "}
                <img
                  src={data.socialIcon}
                  alt="social icon"
                  className="socail-icon"
                />{" "}
              </h5>
              <p className="mobile-font-14-proxima-nova-400">{data.position}</p>
            </div>
          </div>
          <h5 className="d-flex mobile-font-14-proxima-nova-700">
            {data.starCount}
            <span className="d-flex member-star">
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
    <div className="text-center" id="testimonials">
      <img src={gauge} alt="gauge" className="testimonial-gauge-img" />
      <h4 className="mobile-font-28-gloria-regular text-color-pure-black">
        OUR MEMBERS HAVE <br /> GROWN{" "}
        <span className="text-color-orange mobile-font-48-permanet-400">
          10x
        </span>
      </h4>
      <div className="testomonial-cards-section">
        <Slider {...settings}>
          {memberData.map((data, key) => (
            <>{renderCard(data)}</>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileTestimonialsComponent;
