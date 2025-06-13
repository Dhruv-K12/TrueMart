import {
  signInHandler,
  signUpHandler,
} from "../auth/authentication";

export const validateEmailAndPassword = (
  email: string,
  password: string,
  setShowAlert: React.Dispatch<
    React.SetStateAction<String | null>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  confirmPassword?: string,
  name?: string
) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);
  if (isEmailValid && password.length >= 8) {
    if (name === undefined) {
      signInHandler(
        email,
        password,
        setLoading,
        setShowAlert
      );
    } else {
      if (password === confirmPassword) {
        signUpHandler(
          email,
          password,
          name,
          setLoading,
          setShowAlert
        );
      } else {
        setShowAlert(
          "Your password does not match with confirm password"
        );
      }
    }
  } else {
    if (!isEmailValid) {
      setShowAlert("Your email is not valid");
    } else {
      setShowAlert(
        "Your password lenght should include atleast 8 characters"
      );
    }
  }
};
