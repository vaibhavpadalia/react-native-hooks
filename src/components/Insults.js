import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

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

  return (
    <View>
      <Text>{"Insult component"}</Text>
    </View>
  );
};

export default Insults;
