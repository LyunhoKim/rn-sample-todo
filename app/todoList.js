import React from 'react';
import { View } from 'react-native';
import Todo from './todo';


const TodoList = ({ todos, toggleComplete, deleteTodo, type}) => {
  if( type === 'Complete') {
    todos = todos.filter( todo => todo.complete );
  } else if( type === 'Active') {
    todos = todos.filter( todo => !todo.complete);
  }
  todos = todos.map((todo, i) => {
    return (
      <Todo 
        key={ todo.todoIndex }
        todo={ todo }
        toggleComplete={ toggleComplete }
        deleteTodo={ deleteTodo } />
    )
  })
  
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList;