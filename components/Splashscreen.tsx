import { colors } from "@/src/utils/constants";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";

const Splashscreen = () => {
  console.log("working");
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/images/Logo.png")}
      />
      <Animated.Text
        entering={FadeInDown.duration(1000)}
        style={styles.title}
      >
        TrackMart
      </Animated.Text>
      <Animated.Text
        entering={FadeInLeft.duration(1000)}
        style={styles.des}
      >
        Where values meets trust
      </Animated.Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 40,
    fontFamily: "InriaSerif-Bold",
  },
  des: {
    fontFamily: "InriaSerif-Bold",
    fontSize: 16,
  },
});
