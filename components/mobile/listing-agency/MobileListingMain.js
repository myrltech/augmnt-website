import React from "react";
import ListingJoinComponent from "../../desktop/listing-agency/ListingJoinComponent";
import MobileBannerComponent from "./MobileBannerComponent";
import MobilePerkSolutionComponent from "./MobilePerkSolutionComponent";
import MobileSolutionComponent from "./MobileSolutionComponent";
import MobileTestimonialsComponent from "./MobileTestimonialsComponent";

const MobileListingMain = () => {
  return (
    <div>
      <MobileBannerComponent />
      <MobileSolutionComponent />
      <MobilePerkSolutionComponent />
      <MobileTestimonialsComponent />
      <ListingJoinComponent />
    </div>
  );
};

export default MobileListingMain;
