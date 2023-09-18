import React, { useState } from "react";
import PropTypes from "prop-types";

import "./SignIn.scss";

const SignIn = ({ isSubmitted, setIsSubmitted }) => {
  const extraSecureCheckFunction = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="form">
      <form onSubmit={extraSecureCheckFunction}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
