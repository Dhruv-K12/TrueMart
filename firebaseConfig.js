import { initializeApp } from "firebase/app";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVnPYNmjKGai2ei3rm1zE3khr2uDkKKbE",
  authDomain: "truemart-eae2f.firebaseapp.com",
  projectId: "truemart-eae2f",
  storageBucket: "truemart-eae2f.firebasestorage.app",
  messagingSenderId: "704916906825",
  appId: "1:704916906825:web:6bbf4c7d56e5fe8c547098",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(
    ReactNativeAsyncStorage
  ),
});
