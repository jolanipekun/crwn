import { useEffect, React } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import Signup from "../../components/sign-up-form/Signup";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <Signup />
    </>
  );
};

export default SignIn;
