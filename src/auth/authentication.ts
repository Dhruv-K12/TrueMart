import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const signUpHandler = async (
  email: string,
  password: string,
  name: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(response.user, {
      displayName: name,
    });
    setLoading(false);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
};

export const signInHandler = async (
  email: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response.user.displayName);
    setLoading(false);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
};
