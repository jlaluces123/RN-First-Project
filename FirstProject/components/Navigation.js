import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Navigation = (props) => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>{props.title}</Text>
    </View>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ADADAD',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});