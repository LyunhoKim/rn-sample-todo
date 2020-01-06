import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './heading';
import Input from './input';
import Button from './submitButton';
import TodoList from './todoList';
import TabBar from './tabBar';

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

  componentDidUpdate() {
    //console.log('State', this.state);
  }

  inputChange(inputValue) {
    //console.log('Input Value: ', inputValue);
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
          <Input
            inputValue={ inputValue }
            inputChange={ (text) => this.inputChange(text) } />
            <TodoList todos={ todos } toggleComplete={ this.toggleComplete } deleteTodo={ this.deleteTodo } type={ type } />
          <Button submitTodo={ this.submitTodo } />
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