import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style = {styles.login}>
        <Text>Login Page</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});