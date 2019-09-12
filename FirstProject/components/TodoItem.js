import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';

const TodoItem = (props) => {
  let todoItem = props.todoItem;
  return (
    <TouchableOpacity style = {styles.todoItem} onPress = {() => props.toggleDone()}>
      <Text style = {(todoItem.done) ? styles.done : styles.notDone}>
        {todoItem.title}
      </Text>
    </TouchableOpacity>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  done: {
    color: '#AAAAAA',
    backgroundColor: 'lightgreen',
    width: '100%',
  },
  notDone: {
    color: '#313131',
    backgroundColor: 'lightcoral',
    width: '100%',
  }
})