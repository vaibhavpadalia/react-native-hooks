import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </NavigationContainer>
  );
};

export default Routes;