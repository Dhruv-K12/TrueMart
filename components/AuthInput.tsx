import { colors } from "@/src/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
type props = {
  placeholder: string;
  onChangeText: React.Dispatch<
    React.SetStateAction<string>
  >;
  value: string;
  password?: boolean;
};
const AuthInput = ({
  placeholder,
  onChangeText,
  value,
  password,
}: props) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {password ? (
        <>
          <TextInput
            style={styles.main}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={showPass ? false : true}
          />
          <Ionicons
            name={showPass ? "eye" : "eye-off"}
            size={24}
            color="black"
            onPress={() => setShowPass((state) => !state)}
          />
        </>
      ) : (
        <TextInput
          style={styles.main}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: "90%",
    margin: 10,
    borderWidth: 1,
    borderColor: colors.button2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    width: "90%",
    paddingLeft: 14,
    height: 50,
    fontFamily: "Bubble-gum",
    fontSize: 16,
  },
});
