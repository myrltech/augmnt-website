import React, { useState } from "react";
import Modal from "react-responsive-modal";
import SignUpModal from "./SignUpModal";

export default function NeedToBeLoggedInModal() {
  const [open, setOpen] = useState(false);

  /*=========================================================
                      handler
  ==========================================================*/
  const onOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="listings-main-card-btn" onClick={onOpenModal}>
        Contact
      </button>
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
            You Need To Be Logged In.
          </h2>
          <p className="text-left font-24-nunito-sans-600 need-to-be-logged-in-para">
            We’re sorry, but in order to contact any firm, you need to be
            <br /> logged into AUGMNT.
          </p>
          <button
            className="need-to-be-logged-in-contact-btn need-to-be-logged-in-contact-btn--take-me"
            onClick={onOpenModal}
          >
            Take Me To Login
          </button>
          {/* <h5 className=" font-18-nunito-sans-600 forget-password-dont-have-text">
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
}
