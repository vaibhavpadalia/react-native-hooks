import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { callRemoteMethod } from "../utilities/WebServiceHandler";
import { URL } from "../utilities/Constants";

const insultListReducer = (currentState, action) => {
  switch (action.type) {
    case "SET":
      return action.data;
    case "ADD":
      return [...currentState, action.data];
  }
};

const Insults = ({ navigation }) => {
  const [insultList, dispatch] = useReducer(insultListReducer, []);

  useEffect(() => {
    callRemoteMethod(URL.INSULT_LIST, "GET", apiCallback);
  }, []);

  // Function that is called after Insult API is executed
  const apiCallback = res => {
    // setPersonDetails(res);
  };  

  return (
    <View>
      <Text>{"Insult component"}</Text>
    </View>
  );
};

export default Insults;
