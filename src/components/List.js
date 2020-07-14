import React, { useState, useEffect, useRef, useReducer } from "react";
import { FlatList, View, Text, StyleSheet, TextInput } from "react-native";

const nameListReducer = (currentState, action) => {
  switch (action.type) {
    case "SET":
      return action.data;
    case "ADD":
      return [...currentState, action.data];
  }
};

const List = props => {
  const { peopleList } = props;
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();
  const [nameList, dispatch] = useReducer(nameListReducer, []);

  const searchTextChange = text => {
    if (text.length <= 6) {
      setSearchText(text);
    } else {
      inputRef.current.blur();
    }
  };

  return (
    <View style={styles.container}>
      <Text>{"People List"}</Text>
      <TextInput ref={inputRef} value={searchText} onChangeText={text => searchTextChange(text)} />
      <FlatList
        style={styles.container}
        data={peopleList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardView}>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Gender: ${item.gender}`}</Text>
              <Text>{`Birth Year: ${item.birth_year}`}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardView: {
    margin: 10,
    backgroundColor: "#F0F0F0"
  }
});

export default List;
