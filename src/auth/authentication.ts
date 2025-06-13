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
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setShowAlert: React.Dispatch<
    React.SetStateAction<String | null>
  >
) => {
  setShowAlert("working");
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
    setLoading(false);
  }
};

export const signInHandler = async (
  email: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setShowAlert: React.Dispatch<
    React.SetStateAction<null | String>
  >
) => {
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch ({ message }: any) {
    if (
      message ===
      "Firebase: Error (auth/invalid-credential)."
    ) {
      setShowAlert("Your email or password is incorrect");
    } else {
      setShowAlert(message);
    }
  }
  setLoading(false);
};
