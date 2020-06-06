import React, { useState } from 'react';
import { FlatList } from "react-native";

const List = () => {
  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={(value, index) => index.toString()}
    />
  );
};

export default List;