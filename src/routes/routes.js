import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./../components/Signin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import Insults from "../components/Insults";

const AuthStack = createStackNavigator();

const Routes = () => {
  const [token, setToken] = useState(null);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setToken("sampletoken");
      },
      signOut: () => {
        setToken(null);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {token ? (
          <>
            <AuthStack.Screen name={"Signin"} component={Signin} />
            <AuthStack.Screen name={"Signup"} component={Signup} />
          </>
        ) : (
          <>
            <AuthStack.Screen name={"Home"} component={Home} />
            <AuthStack.Screen name={"Insults"} component={Insults} />
          </>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;