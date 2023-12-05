import React from "react";
import WebFooter from "../header-footer/WebFooter";
import WebNavbar from "../header-footer/WebNavbar";
import ContactUsLandingPageDetails from "./ContactUsLandingPageDetails";
import ContactUsLandingPageForm from "./ContactUsLandingPageForm";

export default function ContactUsLandingPageMain() {
  return (
    <>
      <WebNavbar />
      <div className="d-flex flex-nowrap contact-us-main-section">
        <ContactUsLandingPageForm />
        <ContactUsLandingPageDetails />
      </div>
      <WebFooter />
    </>
  );
}
