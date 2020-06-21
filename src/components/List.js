import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from "react-native";

const List = (props) => {

  const { peopleList } = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>{"People List"}</Text>
      <FlatList
        style={{ flex: 1 }}
        data={peopleList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardView}>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Gender: ${item.gender}`}</Text>
              <Text>{`Birth Year: ${item.birth_year}`}</Text>
            </View>);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    margin: 10,
    backgroundColor: "#F0F0F0"
  }
});

export default List;