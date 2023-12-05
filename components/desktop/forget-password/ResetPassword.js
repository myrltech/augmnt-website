import React, { useState } from "react";
import Modal from "react-responsive-modal";
import DisplayError from "../../common/DisplayError";
import SignUpModal from "../listings/SignUpModal";

export default function ResetPassword({
  handleSubmitPassword,
  openReset,
  setOpenReset,
  onOpenResetModal,
  setSendOtpOpen,
}) {
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  /*=========================================================
                      handler
  ==========================================================*/

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setOpenReset(false);
    setSendOtpOpen(false);
  };

  /*=========================================================
                      return
  ==========================================================*/
  return (
    <>
      <button
        onClick={handleSubmitPassword}
        className="forget-password-submit-btn"
      >
        Submit
      </button>
      {console.log(handleSubmitPassword, openReset)}
      <Modal
        open={openReset}
        onClose={onOpenResetModal}
        closeOnEsc={true}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "agumntCustomModal",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={onOpenResetModal} />
        <div className="text-center forget-modal-section">
          <h2 className="font-36-poiret-one-400 forget-password-title">
            Reset password?
          </h2>
          <h5 className="pt-15 font-18-nunito-sans-600 forget-password-text1">
            Please enter your new password
          </h5>
          <form noValidate>
            <div className="forget-password-input-section">
              <div className="forget-passowrd-input">
                <input
                  type="password"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  placeholder="Enter New Password"
                />
              </div>
              <DisplayError error="" />
            </div>
            <>
              <div className="forget-passowrd-input">
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter New Password"
                />
              </div>
              <DisplayError error="" />
            </>
          </form>
          <button onClick={handleSubmit} className="forget-password-submit-btn">
            Submit
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
}
