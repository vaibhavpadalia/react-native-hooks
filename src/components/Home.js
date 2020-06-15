import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { callRemoteMethodAsync, callRemoteMethod } from '../utilities/WebServiceHandler';
import { URL } from "../utilities/Constants";
import List from './List';

const Home = ({ navigation }) => {

  const [locationDetails, setLocationDetails] = useState({});
  const [personDetails, setPersonDetails] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [loader, setLoader] = useState(false);

  // This function works like the lifecycle method componentDidMount with second argument as []
  // If we remove the second argument, the function will work like the lifecycle method componentDidUpdate
  // Use effect hook takes 2 arguments i.e. first is a function which executes after every render cycle
  // Second is an array with dependencies of the function & only when these dependencies change then only the function will re-run
  useEffect(() => {
    // We should not make useEffect async
    // Using an async function makes the callback function return a Promise instead of a cleanup function.
    // Solution: Create an scoped async function in the hook or use IIFE
    const callAPI = async () => {
      try {
        let response = await callRemoteMethodAsync(URL.GET_LOCATION, "GET", setLoader);
        setLocationDetails(response);
      } catch (e) {
        alert("Error occurred:", e.message);
      }
    };
    callAPI();
  }, []);

  // Function that is called after SWAPI People API is executed
  const apiCallback = (res) => {
    setPersonDetails(res);
  };

  // In this function we pass a callback function after API gives success response
  useEffect(() => {
    callRemoteMethod(URL.SWAPI_PEOPLE, "GET", apiCallback);
  }, []);

  useEffect(() => {
    callRemoteMethod(URL.PEOPLE_LIST, "GET", setResponse);
  }, []);

  const setResponse = async (res) => {
    setPeopleList(res.results);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>{"Home component"}</Text>
      <Text>{`Name: ${personDetails.name}`}</Text>
      <Text>{`Country: ${locationDetails?.country}`}</Text>
      <List peopleList={peopleList} />
    </View>
  );
};

export default Home;