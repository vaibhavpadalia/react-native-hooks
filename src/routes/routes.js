import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from './../components/Signin';
import Signup from './../components/Signup';
import Home from '../components/Home';

const AuthStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Signin" component={Signin} />
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;