import React, { useState } from "react";

export default function ContactUsLandingPageDetails() {
  const [values, setValues] = useState({
    email: "",
  });
  /*======================================================================================
                               handler
   =====================================================================================*/
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="conatct-us-details-section">
      <h4 className="font-16-inter-700 contact-us-details-title"> Offices</h4>
      <h5 className="font-16-inter-400 pt-30 contact-us-details-subtitle">
        United States
        <br />
        500 5th Avenue Suite 400, NY 10110
      </h5>
      <h5 className="font-16-inter-400 pt-25 contact-us-details-title">
        United Kingdom
        <br />
        High St, Bromley BR1 1DN
      </h5>
      <h5 className="font-16-inter-400 pt-25 contact-us-details-title">
        France
        <br />
        80 avenue des Terroirs de France, Paris
      </h5>
      <h4 className="font-16-inter-700 pt-25 contact-us-details-title">
        For Quick Inquiries
      </h4>
      <h5 className="font-16-inter-400 pt-30 contact-us-details-subtitle">
        <img
          src={"/imgs/desktop/contact-us/uk-flag.svg"}
          alt="uk flag"
          className="contact-us-uk-flag"
        />
        +44 7777777777
      </h5>
      <h5 className="font-16-inter-400 pt-25 contact-us-details-subtitle">
        <img
          src={"/imgs/desktop/contact-us/us-flag.svg"}
          alt="us flag"
          className="contact-us-us-flag"
        />
        +1 3333333330
      </h5>
      <h4 className="font-16-inter-700 pt-40 contact-us-details-title">
        Would you like to join our newsletter?
      </h4>
      <div className="d-flex align-items-end flex-nowrap pt-30">
        {/*=================================
                   email
          ==============================*/}
        <div className="contact-us-newsletter-input-section">
          <div className="contact-us-input-section">
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Email"
              onChange={handleOnChange}
            />
          </div>
          {/*=== error === */}
          <span></span>
        </div>
        <button className="contact-us-details-btn" onClick={handleSubmit}>
          <i className="fa fa-check" />
        </button>
      </div>
    </div>
  );
}
