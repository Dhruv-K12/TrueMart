import { colors } from "@/src/utils/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
