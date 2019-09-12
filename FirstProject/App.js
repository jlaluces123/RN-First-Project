import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Dependency Imports
import { NativeRouter, Route, Link} from 'react-router-native';

// Component Imports
import Home from './components/Home.js';
import Login from './components/Login.js';

export default function App() {
  return (
    <NativeRouter>
      <View style = {styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7">
            <Text>Home</Text>
          </Link>
          <Link to="/login" underlayColor="#f0f4f7">
            <Text>Login</Text>
          </Link>
        </View>

        <Route exact path = "/" component = { Home } />
        <Route path = "/login" component = { Login } />
      </View>
    </NativeRouter>
  );
}

// Equivalent of CSS file
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    flex: 1,
  },
  nav: {
    height: 70,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
