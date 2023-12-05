import React from "react";
import ListingBannerComponent from "./ListingBannerComponent";
import ListingJoinComponent from "./ListingJoinComponent";
import ListingMembersComponent from "./ListingMembersComponent";
import ListingPerkComponent from "./ListingPerkComponent";
import ListingSolutionsComponent from "./ListingSolutionsComponent";

const ListingMain = () => {
  return (
    <div>
      <ListingBannerComponent />
      <ListingSolutionsComponent />
      <ListingPerkComponent />
      <ListingMembersComponent />
      <ListingJoinComponent />
    </div>
  );
};

export default ListingMain;
