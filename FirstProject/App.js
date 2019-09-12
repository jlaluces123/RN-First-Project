import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Dependency Imports
import { NativeRouter, Route, Link } from 'react-router-native';

// Component Imports
import Home from './components/Home.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';
import InputBar from './components/InputBar.js';
import TodoItem from './components/TodoItem.js';

export default class App extends React.Component {
  state = {
    todoInput: '',
    todos: [
      { id: 0, title: 'Placeholder 1', done: false },
      { id: 1, title: 'Placeholder 2', done: false },
    ],
  };

  addTodo = () => {
    let todosArr = this.state.todos;

    todosArr.unshift({
      id: todosArr.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos: todosArr,
      todoInput: '' // reset input field
    });
    console.log(this.state);
  };

  toggleDone = (item) => {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    this.setState({ todos });
  };

  removeTodo = (item) => {
    let todos = this.state.todos;

    todos = todos.filter(todo => todo.id !== item.id);
    this.setState({ todos });
  };

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.statusBar}></View>
        <Navigation title = "Classic TODO" />

        <InputBar
          handleChange = {todoInput => this.setState({ todoInput })}
          addTodo = {this.addTodo}
          todoInput = {this.state.todoInput}
        />

        <Text>Preview: {this.state.todoInput}</Text>
        <FlatList
          data = {this.state.todos}
          extraData = {this.state}
          keyExtractor = {(item, index) => index.toString()}
          renderItem = {({item, index}) => {
            return (
              <TodoItem todoItem = {item} toggleDone = {() => this.toggleDone(item)} removeTodo = {() => this.removeTodo(item)} />
            )
          }}
        />
      </View>
    );
  };
};

// Equivalent of CSS file
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  statusBar: {
    backgroundColor: 'lightblue',
    height: 20,
  },
});


/*

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
*/