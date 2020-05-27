import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const Signin = ({ navigation }) => {

  // To be only used in root level, not inside any function or loop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginClicked = () => {
  };

  return (
    <View>
      <Text>{"Signin component"}</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setUsername(text)} placeholder={"Username"} />
      <TextInput style={styles.textInput} onChangeText={(text) => setPassword(text)} secureTextEntry placeholder={"Password"} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get("window").width * 0.8
  }
});

export default Signin;