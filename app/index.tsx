import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Calculator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
