import Alert from "@/components/Alert";
import AuthBtn from "@/components/AuthBtn";
import AuthInput from "@/components/AuthInput";
import BackBtn from "@/components/BackBtn";
import { RouteStackParamList } from "@/navigation/StackNavigater";
import { useAuthCtx } from "@/src/context/Authctx";
import { colors, fonts } from "@/src/utils/constants";
import { validateEmailAndPassword } from "@/src/Validator/Validator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Signup = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RouteStackParamList,
    "Signup"
  >;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const authctx = useAuthCtx();
  if (authctx.showAlert) {
    return <Alert error={authctx.showAlert} />;
  }
  return (
    <View style={styles.mainContainer}>
      <BackBtn onPress={() => navigation.goBack()} />
      <Image
        source={require("../../assets/images/Signupdoodle.png")}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.des}>
          Use proper information to continue
        </Text>
        <AuthInput
          placeholder="Enter your name"
          onChangeText={setName}
          value={name}
        />
        <AuthInput
          placeholder="Enter your email address"
          onChangeText={setEmail}
          value={email}
        />
        <AuthInput
          placeholder="Enter your password"
          onChangeText={setPass}
          value={pass}
          password
        />
        <AuthInput
          placeholder="Enter your confirm password"
          onChangeText={setConfirmPass}
          value={confirmPass}
          password
        />
        <AuthBtn
          loading={authctx.loading}
          onPress={() =>
            name !== undefined
              ? validateEmailAndPassword(
                  email,
                  pass,
                  authctx.setShowAlert,
                  authctx.setLoading,
                  confirmPass,
                  name
                )
              : authctx.setShowAlert("Your name is invalid")
          }
          color={colors.button1}
        >
          Signup
        </AuthBtn>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    flex: 1,
  },

  container: {
    width: "90%",
    backgroundColor: "#432C82",
    height: 40,
    flex: 1,
    elevation: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderTopColor: "#EFAC45",
    borderLeftColor: "#EFAC45",
    borderRightColor: "#EFAC45",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.bubbleGum,
    color: "white",
    fontSize: 24,
    marginVertical: 10,
  },
  des: {
    fontFamily: fonts.bubbleGum,
    color: "white",
  },
});
