import Splashscreen from "@/components/Splashscreen";
import { auth } from "@/firebaseConfig";
import StackNavigater, {
  MainStackNavigator,
} from "@/navigation/StackNavigater";
import { AuthCtxProvider } from "@/src/context/Authctx";
import { useFonts } from "expo-font";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [loaded, error] = useFonts({
    "InriaSerif-Bold": require("../assets/fonts/InriaSerif-Bold.ttf"),
    "Bubble-gum": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  });
  console.log(loaded, error);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
    return unsubscribe;
  }, []);
  if (!loaded || error) {
    return null;
  }
  if (loading) {
    return <Splashscreen />;
  }
  return (
    <>
      <AuthCtxProvider>
        {user ? <MainStackNavigator /> : <StackNavigater />}
      </AuthCtxProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
