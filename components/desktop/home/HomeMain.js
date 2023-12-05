import React, { useState } from "react";
import MobileFooter from "../../mobile/header-footer/MobileFooter";
import WebFooter from "../header-footer/WebFooter";
import HomeFoldFour from "./HomeFoldFour";
import HomeFoldOne from "./HomeFoldOne";
import HomeFoldThree from "./HomeFoldThree";
import HomeFoldTwoMain from "./HomeFoldTwoMain";

export default function HomeMain() {
  return (
    <>
      <div className="home-new-title-logo">
        <img
          src={"/imgs/desktop/logo/augmnt-logo.svg"}
          alt={"augmnet"}
          className={"home-new-augmnt-logo"}
        />
      </div>
      <HomeFoldOne id={"home"} />
      <HomeFoldTwoMain id={"testimonials"} />
      <HomeFoldThree id={"value"} />
      <HomeFoldFour id={"useCases"} />
    </>
  );
}
