import React, { useState } from "react";
import Modal from "react-responsive-modal";
import emailjs from "@emailjs/browser";

export default function NeedDevelopersModal() {
  const [open, setOpen] = useState(false);
  const [openThankyou, setopenThankyou] = useState(false);
  const [values, setValues] = useState({
    yourName: "",
    companyName: "",
    companyEmail: "",
    techonology: "",
  });

  /*=========================================================
                      handler
  ==========================================================*/
  const onOpenModal = () => {
    setOpen(!open);
  };

  const onOpenThankYouModal = () => {
    setopenThankyou(!openThankyou);
    setOpen(!open);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    const templateParams = {
      name: values.yourName,
      email: values.companyEmail,
      company: values.company,
      technology: values.technology,
      from_name: values.yourName,
    };

    emailjs
      .send(
        "service_tafkv2l",
        "template_fx7s46l",
        templateParams,
        "I80JpURGh2nDuAf24"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setopenThankyou(!openThankyou);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong");
        }
      );
  };

  const renderForm = () => {
    return (
      <div className="need-developer-form-section">
        {/*=====================================================
                         Your Name
        ===================================================== */}
        <div className="need-developer-input">
          <input
            type="text"
            name="yourName"
            value={values.yourName}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        {/*=====================================================
                         Company Name
        ===================================================== */}
        <div className="pt-25">
          <div className="need-developer-input">
            <input
              type="text"
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </div>
        </div>
        {/*=====================================================
                         Email Address
        ===================================================== */}
        <div className="pt-25">
          <div className="need-developer-input">
            <input
              type="email"
              name="companyEmail"
              value={values.companyEmail}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
        </div>
        {/*=====================================================
                         Which Techonology?
        ===================================================== */}
        <div className="pt-25">
          <div className="need-developer-input">
            <input
              type="text"
              name="techonology"
              value={values.techonology}
              onChange={handleChange}
              placeholder="Which Techonology?"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderThankYou = () => {
    return (
      <Modal
        open={openThankyou}
        onClose={onOpenThankYouModal}
        closeOnEsc={true}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={onOpenThankYouModal} />
        <div className="need-developer-thank-you-section">
          <h2 className="font-48-proxima-nova-700 need-developer-title">
            Thank you!
          </h2>
          <p className="font-18-nunito-sans-400 pt-10 need-developer-para">
            Our Team will get in touch with you soon
          </p>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <button className="home-need-developer-btn" onClick={onOpenModal}>
        <span className="home-need-developer-btn-plus">
          <i className="fa fa-plus" />
        </span>
        I Need Developers !
      </button>
      <Modal
        open={open}
        onClose={onOpenModal}
        closeOnEsc={true}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={onOpenModal} />
        <div className="need-developer-section">
          <h2 className="font-48-proxima-nova-700 need-developer-title">
            Need Developers?
          </h2>
          <p className="font-18-nunito-sans-400 pt-10 need-developer-para">
            Posting requirements for developers on AUGMNT is 100% Free!.
          </p>
          <p className="font-18-nunito-sans-400 pt-30 need-developer-para">
            Kindly share your details with us and our team will help you to find
            the right
            <br /> people for your tech team.
          </p>
          <div className="d-flex flex-nowrap justify-content-between align-items-start">
            {renderForm()}
            <img
              src={"/imgs/desktop/need-developer/need-developer-img.png"}
              alt="need developer img"
              className="need-developer-img"
            />
          </div>
          <div className="text-center">
            <button className="need-developer-btn" onClick={handleSubmit}>
              Get in touch with me ASAP
            </button>
          </div>
        </div>
      </Modal>
      {renderThankYou()}
    </>
  );
}
