import { useEffect, React } from "react";
import { getRedirectResult } from "firebase/auth";

import Signup from "../../components/sign-up-form/Signup";
import Signin from "../../components/sign-in-form/Signin";

import "./auth.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <Signin />
      <Signup />
    </div>
  );
};

export default Authentication;
