import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const Signin = ({ navigation }) => {

  // To be only used in root level, not inside any function or loop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = (screen) => {
    switch (screen) {
      case "Home": navigation.navigate("Home");
        break;
      case "Signup": navigation.navigate("Signup");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{"Signin component"}</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setUsername(text)} placeholder={"Username"} />
      <TextInput style={styles.textInput} onChangeText={(text) => setPassword(text)} secureTextEntry placeholder={"Password"} />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigateTo("Home")}>
        <Text style={styles.buttonText}>{"Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigateTo("Signup")}>
        <Text style={styles.buttonText}>{"Signup"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center"
  },
  textStyle: {
    margin: 10,
    textAlign: "center"
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: Dimensions.get("window").width * 0.8
  },
  buttonStyle: {
    margin: 5,
    alignSelf: "center",
    backgroundColor: "cyan"
  },
  buttonText: {
    margin: 10,
    textAlign: "center"
  }
});

export default Signin;