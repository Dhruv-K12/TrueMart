import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Loading from "./Loading";

const AuthBtn = ({
  children,
  color,
  onPress,
  loading,
}: {
  children: string;
  color: string;
  onPress: () => void;
  loading: boolean;
}) => {
  const squeezeAnimation = useSharedValue(0);
  useEffect(() => {
    squeezeAnimation.value = withSpring(loading ? 1 : 0);
  }, [loading]);
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        squeezeAnimation.value,
        [0, 1],
        [200, 60]
      ),
      borderRadius: interpolate(
        squeezeAnimation.value,
        [0, 1],
        [8, 30]
      ),
    };
  });
  const AnimatedBtn = Animated.createAnimatedComponent(
    TouchableOpacity
  );
  return (
    <AnimatedBtn
      onPress={onPress}
      style={[
        styles.main,
        animationStyle,
        { backgroundColor: color },
      ]}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text style={styles.mainText}>{children}</Text>
      )}
    </AnimatedBtn>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  main: {
    width: 200,
    borderRadius: 8,
    height: 50,
    elevation: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  mainText: {
    color: "white",
    fontFamily: "Bubble-gum",
    fontSize: 16,
  },
});
