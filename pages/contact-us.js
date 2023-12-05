import React from "react";
import HeadTag from "../components/common/HeadTag";
import ContactUsLandingPageMain from "../components/desktop/contact-us/ContactUsLandingPageMain";

export default function contactUs() {
  return (
    <>
      <HeadTag title="Contact Us" />
      <div className="d-none d-md-block">
        <ContactUsLandingPageMain />
      </div>
    </>
  );
}
