import React, { useEffect, useReducer, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { callRemoteMethod } from "../utilities/WebServiceHandler";
import { URL } from "../utilities/Constants";

const insultListReducer = (currentState, action) => {
  switch (action.type) {
    case "SET":
      return [action.data];
    case "ADD":
      return [...currentState, action.data];
    case "DELETE":
      return currentState.filter(item => item.insult != action.data)
  }
};

const Insults = ({ navigation }) => {
  const [type, setType]= useState("set")
  const [insultList, dispatch] = useReducer(insultListReducer, []);

  getInsult = () => {
    callRemoteMethod(URL.INSULT_LIST, "GET", apiCallback);
  }

  useEffect(() => {
    getInsult()
  }, []);

  // Function that is called after Insult API is executed
  const apiCallback = res => {
    switch (type) {
      case "set": dispatch({ type: "SET", data: res.insult });
        break;
      case "add": dispatch({ type: "ADD", data: res.insult });
        break;
      case "delete": dispatch({ type: "DELETE", data: res.insult })
    }
    
  };  

  return (
    <View style={styles.container} >
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
      <TouchableOpacity>
        <Text>{"Add insult"}</Text>
      </TouchableOpacity>
      </View>
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
