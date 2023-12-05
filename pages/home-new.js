import React from "react";
import HeadTag from "../components/common/HeadTag";
import HomeMain from "../components/desktop/home-new/HomeMain";

export default function homeNew() {
  return (
    <>
      <HeadTag title="Augmnt" />
      <div className="d-none d-md-block">
        <HomeMain />
      </div>
    </>
  );
}
