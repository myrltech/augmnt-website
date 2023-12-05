import React from "react";
import HomeFoldTwoForDesktop from "./HomeFoldTwoForDesktop";
import HomeFoldTwoForMobile from "./HomeFoldTwoForMobile";

export default function HomeFoldTwoMain({ id }) {
  return (
    <div id={id}>
      <HomeFoldTwoForDesktop />
      <HomeFoldTwoForMobile />
    </div>
  );
}
