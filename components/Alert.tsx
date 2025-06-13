import { useAuthCtx } from "@/src/context/Authctx";
import { colors } from "@/src/utils/constants";
import Foundation from "@expo/vector-icons/Foundation";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const Alert = ({ error }: { error: String }) => {
  const { setShowAlert } = useAuthCtx();
  const alertAnimation = useSharedValue(0);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    alertAnimation.value = withSpring(1);
  }, []);
  const alertBox = useAnimatedStyle(() => {
    return {
      width: interpolate(
        alertAnimation.value,
        [0, 1],
        [20, width - 100]
      ),
      borderRadius: 8,
      height: interpolate(
        alertAnimation.value,
        [0, 1],
        [20, 120]
      ),
      transform: [
        {
          translateY: interpolate(
            alertAnimation.value,
            [0, 1],
            [-height / 2 + 100, 0]
          ),
        },
      ],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View style={[styles.main, alertBox]}>
        <View style={styles.titleContainer}>
          <Foundation
            name="alert"
            size={30}
            color="white"
            style={{ margin: 10 }}
          />
          <Text style={styles.text}>Alert</Text>
        </View>
        <Text
          style={[
            styles.text,
            { paddingLeft: 10, fontSize: 12 },
          ]}
        >
          {error}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setShowAlert(null);
          }}
          style={styles.btn}
        >
          <Text>ok</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.button2,
    borderWidth: 1,
    borderColor: "white",
    elevation: 10,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    paddingLeft: 4,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  btn: {
    alignSelf: "flex-end",
    margin: 10,
    elevation: 10,
    backgroundColor: colors.primary,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    borderRadius: 20,
  },
});
