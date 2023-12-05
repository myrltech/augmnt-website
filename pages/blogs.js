import React from "react";
import HeadTag from "../components/common/HeadTag";
import BlogMain from "../components/desktop/blog/BlogMain";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import WebNavbar from "../components/desktop/header-footer/WebNavbar";
import MobileBlogMain from "../components/mobile/blog/MobileBlogMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function blog() {
  return (
    <>
      <HeadTag title="Blogs" />

      <div className="d-none d-md-block">
        <WebNavbar activeIndex="blogs" />
        <BlogMain />
        <WebFooter activeMenu="blogs" />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader activeMenu="Blogs" />
        <MobileBlogMain />
        <MobileFooter activeIndex="blogs" />
      </div>
    </>
  );
}
