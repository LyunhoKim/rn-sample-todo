import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './heading';
import Input from './input';
import Button from './submitButton';
import TodoList from './todoList';
import TabBar from './tabBar';
import { Provider } from './context/Store';

class App extends Component {
  render() {
    return (
      <Provider>
        <View style={ styles.container }>
          <ScrollView keyboardShouldPersistTaps='always' style={ styles.content }>
            <Heading />          
            <Input />
            <TodoList />
            <Button />          
          </ScrollView>
          <TabBar />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;