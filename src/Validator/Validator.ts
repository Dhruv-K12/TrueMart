import {
  signInHandler,
  signUpHandler,
} from "../auth/authentication";

export const validateEmailAndPassword = (
  email: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  confirmPassword?: string,
  name?: string
) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);
  if (isEmailValid && password.length >= 8) {
    if (name === undefined) {
      signInHandler(email, password, setLoading);
    } else {
      if (
        name.trim().length !== 0 &&
        password === confirmPassword
      ) {
        console.log("working");
        signUpHandler(email, password, name, setLoading);
      }
    }
  }
};
