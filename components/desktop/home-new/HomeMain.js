import React from "react";
import WebFooter from "../header-footer/WebFooter";
import HomeFoldOne from "./HomeFoldOne";
import HomeFoldThree from "./HomeFoldThree";
import HomeFoldTwo from "./HomeFoldTwo";

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
      <HomeFoldOne />
      <HomeFoldTwo />
      <HomeFoldThree />
      <WebFooter />
    </>
  );
}
