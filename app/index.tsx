import { colors } from "@/src/utils/constants";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import App from "./App";

SplashScreen.preventAutoHideAsync();
const index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <App />
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle="dark-content"
      />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
