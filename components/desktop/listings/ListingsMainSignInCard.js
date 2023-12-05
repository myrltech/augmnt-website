import React, { useState } from "react";
import DisplayError from "../../common/DisplayError";
import ForgetPassword from "../forget-password/ForgetPassword";
import SignUpModal from "./SignUpModal";

export default function ListingsMainSignInCard() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickLogin = () => {
    console.log(values);
  };

  return (
    <>
      <div className="listings-main-colm1__signInCard">
        <h4 className="listings-main-colm1__signInCard-text1 font-32-poiret-one-400">
          Enter your details
        </h4>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email Adddress"
          onChange={handelOnChange}
        />
        <DisplayError error="" />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handelOnChange}
        />
        <DisplayError error="" />
        {/* <a target="_blank" rel="noopener noreferrer" href="#">
          <p className="listings-main-colm1__signInCard-text2 font-18-proxima-nova-400">
            Forgot Password?
          </p>
        </a> */}
        <ForgetPassword />
        <div className="text-center">
          <button className="listings-login-btn" onClick={handleOnClickLogin}>
            Login
          </button>
        </div>
        {/* <p className="listings-main-colm1__signInCard-text3 font-14-nunito-sans-600">
          Dont have an account? <br className="d-block d-md-none" />
          <a target="_blank" rel="noopener noreferrer" href="#">
            <span className="font-14-nunito-sans-900">
              Get in touch with us
            </span>
          </a>
        </p> */}
        <SignUpModal />
      </div>
    </>
  );
}
