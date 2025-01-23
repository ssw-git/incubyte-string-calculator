import React, {useEffect, useState} from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ToastAndroid
} from "react-native";
import {add} from "./helper";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | number>(null);

  useEffect(() => {
    setResult(null);
  }, [input]);

  const handleAdd = () => {
    try {
      setResult(add(input));
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}>String Calculator</Text>
      </View>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter numbers"
        placeholderTextColor={"#ffffff70"}
        testID="input"
      />

      <View style={styles.result_view}>
        <Text style={styles.result_text}>Sum is</Text>
        <Text style={styles.result_text1} testID="result">
          {result}
        </Text>
      </View>

      <View>
        <TouchableNativeFeedback onPress={() => handleAdd()} testID="button">
          <View style={styles.button}>
            <Text style={styles.button_text}>Calculate</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result_text1: {
    color: "white",
    fontSize: 40
  },
  result_text: {
    color: "white",
    fontSize: 20
  },
  result_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header_text: {
    color: "white",
    fontSize: 30
  },
  header_view: {
    flex: 1,
    paddingTop: 30
  },
  container: {
    padding: 20,
    paddingVertical: 40,
    backgroundColor: "#456ab5",
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff70",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 140,
    textAlignVertical: "top",
    backgroundColor: "#00000030",
    fontSize: 20,
    color: "#fff"
  },
  button: {
    backgroundColor: "#00000020",
    borderWidth: 1,
    borderColor: "#ffffff50",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  button_text: {
    color: "#fff",
    fontSize: 20
  }
});
