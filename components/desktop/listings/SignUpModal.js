import React, { useState } from "react";
import Modal from "react-responsive-modal";
import DisplayError from "../../common/DisplayError";

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    yourName: "",
    email: "",
    pNumber: "",
  });
  /*=========================================================
                        handler
    ==========================================================*/
  const onOpenModal = () => {
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
    setOpen(false);
  };

  /*=========================================================
                        return
   ==========================================================*/
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h5 className="font-18-nunito-sans-600 dont-have-text">
          Dont have an account?{" "}
        </h5>
        <button
          className="font-18-nunito-sans-900 get-in-touch-btn"
          onClick={onOpenModal}
        >
          Get in touch with us
        </button>
      </div>
      <Modal
        open={open}
        onClose={onOpenModal}
        closeOnEsc={true}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "agumntCustomModal",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={onOpenModal} />
        <div className="text-center need-to-be-logged-in-section">
          <h2 className="font-36-poiret-one-400 forget-password-title">
            I would like to sign up !
          </h2>
          <h5 className="pt-20 font-18-nunito-sans-600 forget-password-text1">
            Send us your details and we’ll be in touch :)
          </h5>
          <form noValidate>
            <div className="forget-password-input-section text-left">
              {/*=====================================================
                                   name
              =====================================================*/}
              <div className="forget-passowrd-input">
                <input
                  type="text"
                  name="yourName"
                  value={values.yourName}
                  onChange={handleChange}
                  placeholder="Your Name (Mandatory)"
                />
              </div>
              <DisplayError error="" />
              {/*=====================================================
                                   email
              =====================================================*/}
              <>
                <div className="forget-passowrd-input">
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email Address (Mandatory)"
                  />
                </div>
                <DisplayError error="" />
              </>
              {/*=====================================================
                                   pNumber
              =====================================================*/}
              <>
                <div className="forget-passowrd-input">
                  <input
                    type="number"
                    name="pNumber"
                    value={values.pNumber}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)"
                  />
                </div>
                <DisplayError error="" />
              </>
            </div>
          </form>
          <button
            className="need-to-be-logged-in-contact-btn need-to-be-logged-in-contact-btn--take-me"
            onClick={handleSubmit}
          >
            {" "}
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}
