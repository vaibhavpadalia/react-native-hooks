import React, { useState } from 'react';
import { FlatList, View, Text } from "react-native";

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
            <View>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Gender: ${item.gender}`}</Text>
              <Text>{`Birth Year: ${item.birth_year}`}</Text>
            </View>);
        }}
      />
    </View>
  );
};

export default List;