import { RouteStackParamList } from "@/navigation/StackNavigater";
import { colors, fonts } from "@/src/utils/constants";
import Feather from "@expo/vector-icons/Feather";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type props = {
  navigation: NativeStackNavigationProp<
    RouteStackParamList,
    "Main"
  >;
};
const Main = ({ navigation }: props) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../assets/images/doodle1.png")}
        style={styles.img}
      />
      <Text style={styles.title}>Welcome To TrackMart</Text>
      <Text style={styles.des}>
        Your Smart Way to Shop & Track! TrackMart is your
        all-in-one eCommerce app designed for a seamless and
        intelligent shopping experience. Browse a wide range
        of quality products, enjoy exclusive deals, and get
        real-time order tracking — all in one beautifully
        simple app. Whether you’re looking for fashion,
        electronics, home essentials, or more, TrackMart
        makes sure your purchase journey is smooth from cart
        to doorstep.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Get Started</Text>
        <Feather
          name="arrow-right"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.signupBtn}
      >
        <Text
          style={[
            styles.btnText,
            { fontSize: 18, color: colors.button2 },
          ]}
        >
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 10,
  },
  img: {
    width: "90%",
    height: 200,
    margin: 20,
    alignSelf: "center",
  },
  title: {
    fontFamily: fonts.bubbleGum,
    fontSize: 24,
    marginVertical: 20,
  },
  des: {
    fontFamily: fonts.bubbleGum,
    fontSize: 16,
  },
  btn: {
    width: "99%",
    backgroundColor: colors.primary,
    height: 60,
    alignSelf: "center",
    marginVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 50,
  },
  btnText: {
    color: "white",
    fontFamily: "Bubble-gum",
    fontSize: 24,
  },
  signupBtn: {
    alignSelf: "center",
  },
});
