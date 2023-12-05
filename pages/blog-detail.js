import React from "react";
import HeadTag from "../components/common/HeadTag";
import BlogDetailMain from "../components/desktop/blog-details/BlogDetailMain";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import WebNavbar from "../components/desktop/header-footer/WebNavbar";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function blog() {
  return (
    <>
      <HeadTag title="Blogs" />

      <div className="d-none d-md-block">
        <WebNavbar activeIndex="blogs" />
        <BlogDetailMain />
        <WebFooter activeMenu="blogs" />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader activeMenu="Blogs" />
        <BlogDetailMain />
        <MobileFooter activeIndex="blogs" />
      </div>
    </>
  );
}
