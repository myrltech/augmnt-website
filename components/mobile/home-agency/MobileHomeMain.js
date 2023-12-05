import React from "react";
import MobileHeader from "../header-footer/MobileHeader";
import MobileHomeFoldFive from "./MobileHomeFoldFive";
import MobileHomeFoldFour from "./MobileHomeFoldFour";
import MobileHomeFoldOne from "./MobileHomeFoldOne";
import MobileHomeFoldThree from "./MobileHomeFoldThree";
import MobileHomeFoldTwo from "./MobileHomeFoldTwo";

export default function MobileHomeMain() {
  return (
    <>
      <MobileHeader activeMenu="Home" />
      <MobileHomeFoldOne />
      <MobileHomeFoldTwo />
      <MobileHomeFoldThree />
      <MobileHomeFoldFour />
      <MobileHomeFoldFive />
    </>
  );
}
