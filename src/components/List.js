import React, { useState } from 'react';
import { FlatList, View, Text } from "react-native";

const List = (props) => {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "red" }}
      data={[1, 2, 3]}
      keyExtractor={(value, index) => index.toString()}
      renderItem={(item, index) => {
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text>{`Name: ${"Name"}`}</Text>
          </View>
        </View>;
      }}
    />
  );
};

export default List;