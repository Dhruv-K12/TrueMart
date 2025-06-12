import Home from "@/Screen/Main/Home";
import Profile from "@/Screen/Main/Profile";
import Wishlist from "@/Screen/Main/Wishlist";
import { colors } from "@/src/utils/constants";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? colors.button1 : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="heart"
              size={20}
              color={focused ? colors.button1 : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? colors.button1 : "black"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({});
