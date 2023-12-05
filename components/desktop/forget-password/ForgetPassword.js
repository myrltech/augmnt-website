import React, { useState } from "react";
import Modal from "react-responsive-modal";
import DisplayError from "../../common/DisplayError";
import SignUpModal from "../listings/SignUpModal";
import ResetPassword from "./ResetPassword";

export default function ForgetPassword() {
  const [open, setOpen] = useState(false);
  const [sendOtpOpen, setSendOtpOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);

  const [values, setValues] = useState({
    email: "",
  });

  const [optValues, setOtpValues] = useState({
    otpNumber: "",
  });

  /*=========================================================
                      handler
  ==========================================================*/
  const onOpenModal = () => {
    setOpen(!open);
  };

  const onOpenOtpModal = () => {
    setSendOtpOpen(!sendOtpOpen);
  };

  const onOpenResetModal = () => {
    setOpenReset(!openReset);
    setSendOtpOpen(!sendOtpOpen);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNumber = (e) => {
    setOtpValues({
      ...optValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setSendOtpOpen(!sendOtpOpen);
    console.log(values);
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenReset(true);
    console.log(optValues);
    // setSendOtpOpen(false);
  };

  /*=========================================================
                      renderOTPModal
  ==========================================================*/
  const renderOTPModal = () => {
    return (
      <>
        <Modal
          open={sendOtpOpen}
          onClose={onOpenOtpModal}
          closeOnEsc={true}
          closeOnOverlayClick={false}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "agumntCustomModal",
            closeButton: "customCloseButton",
          }}
        >
          <span className="closeIconInModal" onClick={onOpenOtpModal} />
          <div className="text-center forget-modal-section">
            <h2 className="font-36-poiret-one-400 forget-password-title">
              Forgot password?
            </h2>
            <h5 className="pt-15 font-18-nunito-sans-600 forget-password-text1">
              Enter the OTP that was sent to your email address :)
            </h5>
            <div className="forget-password-input-section">
              <form noValidate>
                <div className="forget-passowrd-input">
                  <input
                    type="number"
                    name="otpNumber"
                    value={optValues.otpNumber}
                    onChange={handleChangeNumber}
                    placeholder="Enter OTP"
                  />
                </div>
              </form>
              <DisplayError error="" />
            </div>
            {/* <button
              onClick={handleSubmit}
              className="forget-password-submit-btn"
            >
              Submit
            </button> */}
            <ResetPassword
              handleSubmitPassword={handleSubmit}
              onOpenResetModal={onOpenResetModal}
              openReset={openReset}
              setOpenReset={setOpenReset}
              setSendOtpOpen={setSendOtpOpen}
            />
            {/* <h5 className="pt-40 font-18-nunito-sans-600 forget-password-dont-have-text">
              Dont have an account?{" "}
              <span className="font-18-nunito-sans-900">
                Get in touch with us
              </span>
            </h5> */}
            <SignUpModal />
          </div>
        </Modal>
      </>
    );
  };

  /*=========================================================
                      renderModal
  ==========================================================*/
  const renderModal = () => {
    return (
      <>
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
          <div className="text-center forget-modal-section">
            <h2 className="font-36-poiret-one-400 forget-password-title">
              Forgot Password?
            </h2>
            <h5 className="pt-15 font-18-nunito-sans-600 forget-password-text1">
              Enter Your Email Address And We’ll Send You An OTP.
            </h5>
            <div className="forget-password-input-section">
              <form noValidate>
                <div className="forget-passowrd-input">
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email Adddress"
                  />
                </div>
                <DisplayError error="" />
              </form>
            </div>
            <button
              onClick={handleSendOtp}
              className="forget-password-submit-btn"
            >
              Send OTP
            </button>
            {/* <h5 className="pt-40 font-18-nunito-sans-600 forget-password-dont-have-text">
              Dont have an account?{" "}
              <span className="font-18-nunito-sans-900">
                Get in touch with us
              </span>
            </h5> */}
            <SignUpModal />
          </div>{" "}
        </Modal>
      </>
    );
  };

  /*=========================================================
                      return
  ==========================================================*/
  return (
    <>
      <div className="text-right">
        <button onClick={onOpenModal} className="forget-password-btn">
          Forgot Password?
        </button>
      </div>
      {renderModal()}
      {renderOTPModal()}
    </>
  );
}
