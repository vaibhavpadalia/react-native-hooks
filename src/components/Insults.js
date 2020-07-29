import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { callRemoteMethod } from "../utilities/WebServiceHandler";
import { URL } from "../utilities/Constants";

const insultListReducer = (currentState, action) => {
  switch (action.type) {
    case "SET":
      return [action.data];
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
    dispatch({ type: "SET", data: res.insult });
  };  

  return (
      <FlatList
        style={styles.container}
        data={insultList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardView}>
              <Text>{`${index+1}: ${item}`}</Text>
            </View>
          );
        }}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  peopleListText: {
    margin: 10,
    marginBottom: 5
  },
  cardView: {
    margin: 10,
    backgroundColor: "#F0F0F0"
  },
});

export default Insults;
