import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackBtn = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 25,
        alignSelf: "flex-start",
        margin: 8,
      }}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackBtn;
