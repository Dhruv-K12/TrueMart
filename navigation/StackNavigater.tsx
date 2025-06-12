import Login from "@/Screen/Auth/Login";
import Main from "@/Screen/Auth/Main";
import Signup from "@/Screen/Auth/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigation from "./TabsNavigation";

export type RouteStackParamList = {
  Main: undefined;
  Login: undefined;
  Signup: undefined;
};
const Stack =
  createNativeStackNavigator<RouteStackParamList>();
const StackNavigater = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default StackNavigater;

const MainStack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="Main"
        component={TabsNavigation}
      />
    </MainStack.Navigator>
  );
};
