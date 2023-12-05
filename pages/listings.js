import React from "react";
import HeadTag from "../components/common/HeadTag";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import WebNavbar from "../components/desktop/header-footer/WebNavbar";
import ListingsMain from "../components/desktop/listings/ListingsMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function listings() {
  return (
    <>
      <HeadTag title="Listings" />

      <div className="d-none d-md-block">
        <WebNavbar activeIndex="listings" />
        <ListingsMain />
        <WebFooter activeMenu="listings" />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader activeMenu="Listings" />
        <ListingsMain />
        <MobileFooter activeIndex="listings" />
      </div>
    </>
  );
}
