import React from "react";
import MobileHeader from "../header-footer/MobileHeader";
import MobileHomeFoldFive from "./MobileHomeFoldFive";
import MobileHomeFoldFiveSub from "./MobileHomeFoldFiveSub";
import MobileHomeFoldFour from "./MobileHomeFoldFour";
import MobileHomeFoldOne from "./MobileHomeFoldOne";
import MobileHomeFoldThree from "./MobileHomeFoldThree";
import MobileHomeFoldThreeSub from "./MobileHomeFoldThreeSub";
import MobileHomeFoldTwo from "./MobileHomeFoldTwo";
import MobileHomeFoldTwoSub from "./MobileHomeFoldTwoSub";

export default function MobileHomeMain() {
  return (
    <>
      <MobileHeader activeMenu="Home" />
      <MobileHomeFoldOne />
      <MobileHomeFoldTwoSub />
      <MobileHomeFoldFour />
      <MobileHomeFoldThree />
      <MobileHomeFoldTwo />
      <MobileHomeFoldFive />
      <MobileHomeFoldThreeSub />
      <MobileHomeFoldFiveSub />
    </>
  );
}
