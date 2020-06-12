import React, { useState } from 'react';
import { FlatList } from "react-native";

const List = (props) => {
  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={(value, index) => index.toString()}
      renderItem={(item, index) => {
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text>{`Name: ${name}`}</Text>
          </View>
        </View>;
      }}
    />
  );
};

export default List;