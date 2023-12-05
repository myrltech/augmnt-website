import React from "react";
import HeadTag from "../components/common/HeadTag";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import WebNavbar from "../components/desktop/header-footer/WebNavbar";
import OurProcessMain from "../components/desktop/ourProcess/OurProcessMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function ourProcess() {
  return (
    <>
      <HeadTag title="Our Process" />

      <div className="d-none d-md-block">
        <WebNavbar activeIndex="ourProcess" />
        <OurProcessMain />
        <WebFooter activeMenu="ourProcess" />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader activeMenu="Our Process" />
        <OurProcessMain />
        <MobileFooter activeIndex="ourProcess" />
      </div>
    </>
  );
}
