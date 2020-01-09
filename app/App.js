import React, { Component, createContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './heading';
import Input from './input';
import Button from './submitButton';
import TodoList from './todoList';
import TabBar from './tabBar';
import Store from './context/Store';

const { Provider } = Store;

let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '' ,
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {    
    this.setState({ inputValue });
  }

  submitTodo() {    
    if(this.state.inputValue.match(/^\s*$/)) {
      return ;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
      inputValue: ''
    }, () => {
      
    })
  }

  toggleComplete(index) {
    let todos = this.state.todos.map(
      todo => { 
        if(todo.todoIndex === index) 
          todo.complete = !todo.complete;
        return todo;      
      }
    );
    this.setState({ todos });
    console.log(`todos`, todos);
  }

  deleteTodo(index) {    
    let todos = this.state.todos.filter( todo => todo.todoIndex !== index);    
    this.setState({ todos });
  }

  setType(type) {
    this.setState({ type });
  }

  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={ styles.container }>
        <ScrollView keyboardShouldPersistTaps='always' style={ styles.content }>
          <Heading />
          <Provider value={{ data: this.state, inputChange: (text) => this.inputChange(text), submitTodo: this.submitTodo, toggleComplete: this.toggleComplete, deleteTodo: this.deleteTodo }}>            
            <Input />
            <TodoList />
            <Button />
          </Provider>
        </ScrollView>
        <TabBar type={ type } setType={ this.setType } />
      </View>
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