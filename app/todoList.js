import React from 'react';
import { View } from 'react-native';
import Todo from './todo';
import Store from './context/Store';

const { Consumer } = Store;

const TodoList = () => (
  <View>
    <Consumer>
      {({ data: { todos, type }, toggleComplete, deleteTodo}) => {
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
        return todos;
      }}
    </Consumer>
  </View>
)



export default TodoList;