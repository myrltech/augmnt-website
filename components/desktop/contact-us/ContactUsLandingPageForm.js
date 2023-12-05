import React, { useState } from "react";

export default function ContactUsLandingPageForm() {
  const [values, setValues] = useState({
    companyName: "",
    companyPhone: "",
    companyEmail: "",
    yourCompanyName: "",
    natureOfBussiness: "",
  });

  const [error, setError] = useState();

  /*======================================================================================
                               handler
   =====================================================================================*/
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleOnChangeNumber = (e) => {
    setValues({
      ...values,
      // [e.target.name]: [e.target.value],
      [e.target.name]: e.target.validity.valid ? e.target.value : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="contact-us-form-section">
      {/* font-72-proxima-nova-900  */}
      <h1 className="font-68-proxima-nova-900 contact-us-title">Contact Us</h1>
      <p className="pt-15 font-16-nunito-sans-400 contact-us-para">
        Need an experienced and skilled hand with custom IT projects? <br />
        Fill out the form to get a free consultation.
      </p>
      <form noValidate>
        {/*=======================
                 comapnay name
          ========================*/}
        <div className="pt-50">
          <div className="contact-us-input-section">
            <input
              type="text"
              name="companyName"
              value={values.companyName}
              placeholder="Contact name"
              onChange={handleOnChange}
            />
          </div>
          {/*=== error === */}
          {error ? (
            <span className="contact-us-error-msg"></span>
          ) : (
            <span className="contact-us-error-msg "></span>
          )}
        </div>
        {/*=======================
                 Contact Phone
          ========================*/}
        <div className="pt-50">
          <div className="contact-us-input-section">
            <input
              type="number"
              name="companyPhone"
              value={values.companyPhone}
              placeholder="Contact Phone"
              onChange={handleOnChangeNumber}
            />
          </div>
          {/*=== error === */}
          {error ? (
            <span className="contact-us-error-msg"></span>
          ) : (
            <span className="contact-us-error-msg "></span>
          )}{" "}
        </div>
        {/*=======================
                 Contact email
          ========================*/}
        <div className="pt-30">
          <div className="contact-us-input-section">
            <input
              type="email"
              name="companyEmail"
              value={values.companyEmail}
              placeholder="Contact Email"
              onChange={handleOnChange}
            />
          </div>
          {/*=== error === */}
          {error ? (
            <span className="contact-us-error-msg"></span>
          ) : (
            <span className="contact-us-error-msg "></span>
          )}{" "}
        </div>
        {/*=======================
                 Your Company Name
          ========================*/}
        <div className="pt-30">
          <div className="contact-us-input-section">
            <input
              type="text"
              name="yourCompanyName"
              value={values.yourCompanyName}
              placeholder="Your Company Name"
              onChange={handleOnChange}
            />
          </div>
          {/*=== error === */}
          {error ? (
            <span className="contact-us-error-msg"></span>
          ) : (
            <span className="contact-us-error-msg "></span>
          )}{" "}
        </div>
        {/*=================================
                   Nature of Bussiness
          ==============================*/}
        <div className="pt-30">
          <div className="contact-us-input-section">
            <input
              type="text"
              name="natureOfBussiness"
              value={values.natureOfBussiness}
              placeholder="Nature of Bussiness"
              onChange={handleOnChange}
            />
          </div>
          {/*=== error === */}
          {error ? (
            <span className="contact-us-error-msg"></span>
          ) : (
            <span className="contact-us-error-msg "></span>
          )}{" "}
        </div>
      </form>
      <button className="contact-us-form-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
