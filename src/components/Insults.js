import React, { useEffect, useReducer, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { callRemoteMethod } from "../utilities/WebServiceHandler";
import { URL } from "../utilities/Constants";
import useAsyncState from "../customHooks/useAsyncState";

const insultListReducer = (currentState, action) => {
  switch (action.type) {
    case "SET":
      return [action.data];
    case "ADD":
      return [...currentState, action.data];
    case "DELETE":
      return currentState.filter(item => item != action.data);
    default: throw Error("Wrong action type for reducer")
  }
};

const Insults = ({ navigation }) => {
  const [actionType, setActionType] = useState("set");
  const [count, setCount] = useState(0);
  const [insultList, dispatch] = useReducer(insultListReducer, []);

  const getInsult = () => {
    callRemoteMethod(URL.INSULT_LIST, "GET", apiCallback);
  }

  const addInsult = () => {
    setCount((prevState) => prevState + 1);
    setActionType("add");
  }

  const deleteInsult = (insult) => {
    dispatch({ type:"DELETE", data: insult })
  }

  useEffect(() => {
    getInsult();
  },[count])

  // Function that is called after Insult API is executed
  const apiCallback = res => {
    switch (actionType) {
      case "set": dispatch({ type: "SET", data: res.insult });
        break;
      case "add": dispatch({ type: "ADD", data: res.insult });
        break;
      default: throw Error("Wrong option")
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
              <Text>{`${ index + 1 }: ${ item }`}</Text>
              <TouchableOpacity style={styles.deleteButtonStyle} onPress={() => deleteInsult(item)}>
                <Text style={styles.buttonText}>{"Delete insult"}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => addInsult()}>
        <Text style={styles.buttonText}>{"Add insult"}</Text>
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
  buttonStyle: {
    margin: 5,
    alignSelf: "center",
    backgroundColor: "cyan"
  },
  buttonText: {
    margin: 10,
    textAlign: "center"
  },
  deleteButtonStyle: {
    margin: 5,
    alignSelf: "flex-end",
    backgroundColor: "red"
  },
  deleteButtonText: {
    margin: 5,
    textAlign: "center"
  }
});

export default Insults;
