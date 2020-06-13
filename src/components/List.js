import React, { useState } from 'react';
import { FlatList, View, Text } from "react-native";

const List = (props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={[{ id: 1, value: "a" }, { id: 1, value: "a" }, { id: 1, value: "a" }]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <View>
            <Text>{item.value}</Text>
          </View>);
      }}
    />
  );
};

export default List;