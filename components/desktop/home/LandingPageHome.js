import React from "react";
import WebFooter from "../header-footer/WebFooter";
import WebNavbar from "../header-footer/WebNavbar";
import LandingPageHomeFoldEight from "./LandingPageHomeFoldEight";
import LandingPageHomeFoldFive from "./LandingPageHomeFoldFive";
import LandingPageHomeFoldFour from "./LandingPageHomeFoldFour";
import LandingPageHomeFoldOne from "./LandingPageHomeFoldOne";
// import LandingPageHomeFoldSeven from "./LandingPageHomeFoldSeven";
import LandingPageHomeFoldSevenNew from "./LandingPageHomeFoldSevenNew";
import LandingPageHomeFoldSix from "./LandingPageHomeFoldSix";
import LandingPageHomeFoldThree from "./LandingPageHomeFoldThree";
import LandingPageHomeFoldTwo from "./LandingPageHomeFoldTwo";

export default function LandingPageHome() {
  return (
    <>
      <WebNavbar activeIndex="home" />
      <LandingPageHomeFoldOne />
      <LandingPageHomeFoldTwo />
      <LandingPageHomeFoldSix />
      <LandingPageHomeFoldFive />
      <LandingPageHomeFoldThree />
      {/* <LandingPageHomeFoldSeven /> */}
      <LandingPageHomeFoldSevenNew />
      <LandingPageHomeFoldFour />
      <LandingPageHomeFoldEight />
      <WebFooter activeMenu="home" />
    </>
  );
}
