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

const Login = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RouteStackParamList,
    "Login"
  >;
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const authctx = useAuthCtx();
  if (authctx.showAlert) {
    return <Alert error={authctx.showAlert} />;
  }
  console.log(authctx.showAlert);
  return (
    <View style={styles.mainContainer}>
      <BackBtn
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Image
        source={require("../../assets/images/logindoodle.png")}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.des}>
        Enter your email and password continue
      </Text>
      <AuthInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
      />
      <AuthInput
        value={pass}
        onChangeText={setPass}
        placeholder="Enter your password"
        password
      />
      <AuthBtn
        loading={authctx.loading}
        onPress={() =>
          validateEmailAndPassword(
            email,
            pass,
            authctx.setShowAlert,
            authctx.setLoading
          )
        }
        color={colors.button2}
      >
        Sign In
      </AuthBtn>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 200,
          marginVertical: 10,
        }}
      >
        ----------------------or----------------------
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontFamily: fonts.bubbleGum,
    fontSize: 24,
  },
  des: {
    fontFamily: fonts.bubbleGum,
    fontSize: 16,
  },
});
