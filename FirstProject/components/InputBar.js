import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style = {styles.inputContainer}>
      <TextInput
        style = {styles.input}
        onChangeText = {props.handleChange}
        value = {props.todoInput}
      />
      <TouchableOpacity style = {styles.addButton} onPress = {props.addTodo}>
        <Text style = {styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputBar;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'lightgrey',
    flex: 1,
    fontSize: 20,
    height: 35,
  },
  addButton: {
    width: 100,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
  },
})