import React from 'react';
import { View } from 'react-native';
import Todo from './todo';
import { connect, actions } from './context/Store';

const TodoList = ({todos, type}) => {
  if( type === 'Complete') {
    todos = todos.filter( todo => todo.complete );
  } else if( type === 'Active') {
    todos = todos.filter( todo => !todo.complete);
  }
  todos = todos.map((todo, i) => {
    return (
      <Todo 
      key={ todo.todoIndex }
      todo={ todo } />
      )
    })
  return (
  <View>
    {todos}
  </View>)
}



export default connect(state => state) (TodoList);