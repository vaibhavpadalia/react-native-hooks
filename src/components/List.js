import React, { useState, useRef } from "react";
import { FlatList, View, Text, StyleSheet, TextInput } from "react-native";

const List = props => {
  const { peopleList } = props;
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  const searchTextChange = text => {
    if (text.length <= 6) {
      setSearchText(text);
    } else {
      inputRef.current.blur();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.peopleListText}>{"People List"}</Text>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={searchText}
        onChangeText={text => searchTextChange(text)}
      />
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
  peopleListText: {
    margin: 10,
    marginBottom: 5
  },
  cardView: {
    margin: 10,
    backgroundColor: "#F0F0F0"
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    backgroundColor: "#EAEAEA"
  }
});

export default List;
