import React from "react";
import OurProcessMainWhyAugmentCardMobile from "./OurProcessMainWhyAugmentCardMobile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurProcessMainWhyAugmentMobile() {
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
    className: "slickCarousel",
  };

  return (
    <Slider {...settings}>
      <OurProcessMainWhyAugmentCardMobile
        title="Curated top Agencies"
        desc="Over the years, we have partnered with over 500+ agencies - vetted, and curated by geographies, skills, price range, experience."
        icon="/imgs/desktop/our-process/curated-top-agencies-icon.svg"
      />
      <OurProcessMainWhyAugmentCardMobile
        title={
          <>
            Thouroughly <b className="font-48-proxima-nova-700">Vetted</b>
          </>
        }
        // desc="Tech talent at our partner agencies go through our proprietary skill tests. We interview them on their knowledge, and soft skills. Only the creme de la creme makes it to our listings. Great people that adapt quickly to your work environment are guaranteed."
        desc="Tech talent at our partner agencies go through our proprietary skill tests. We interview them on their knowledge, and soft skills. Only the creme de la creme makes it to our listings. Great people that adapt quickly to your work environment are guaranteed."
        icon="/imgs/desktop/our-process/thouroughly-vetted-icon.svg"
      />
      <OurProcessMainWhyAugmentCardMobile
        title={
          <>
            <b className="font-48-proxima-nova-700">Assisted</b> Onboarding
          </>
        }
        desc="We do not just make introductions and leave the table. We get your project up and running. We make sure you are matched with the ‘right fits’ and that they hit the ground running. Your new team will be on their way within days."
        // desc="We do not just make introductions and leave the table. We get your project up and running. We make sure you are matched with the ‘right fits’ and that they hit the ground running. Your new team will be on their way within days."
        icon="/imgs/desktop/our-process/assisted-onboarding-icon.svg"
      />
      <OurProcessMainWhyAugmentCardMobile
        title={
          <>
            Deep{" "}
            <b className="font-48-proxima-nova-700"> Industry Experience</b>
          </>
        }
        desc="Founders of Augmnt are SAAS founders themselves and understand the challenges of hiring, onboarding and assembling a team of engineers. Having decades of rich experience we’ve settled at the best way of hiring engineers, when you need them."
        // desc="Being agency founders, between themselves, the founders have more than 10 years of hiring and deploying tech talent. We have made the mistakes and suffered the consequences so you do not have to. We promise you a smooth execution of your new project."
        icon="/imgs/desktop/our-process/deep-industry-experience-icon.svg"
      />
    </Slider>
  );
}
