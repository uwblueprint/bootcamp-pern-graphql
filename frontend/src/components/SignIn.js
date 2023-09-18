import React from "react";
import PropTypes from "prop-types";

import "./SignIn.scss";

const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  setIsSubmitted(true);
};

const SignIn = ({}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
