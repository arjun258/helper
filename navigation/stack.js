import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import CreateScreen from "./screens/CreateScreen";
import HomeScreen from "./screens/homeScreen";

const Stack = createStackNavigator();
export default Stack;
return(
  <NavigationContainer>
    <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{
         headerShown: false
       }}>
    <Stack.Screen name = 'Home' component={HomeScreen}/>
    <Stack.Screen name = 'Create' component={CreateScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);