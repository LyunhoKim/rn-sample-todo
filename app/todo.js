import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './todoButton';
import { connect, actions } from './context/Store';

const Todo = ({ todo }) => (
  <View style={ styles.todoContainer }>
    <Text style={ styles.todoText }>
      {todo.title}
    </Text>
    <View style={ styles.buttons }>
      <TodoButton onPress={ () => actions.toggleComplete(todo.todoIndex)  } complete={ todo.complete } name={ todo.complete ? `completed` : `done` }/>
      <TodoButton onPress={ () => actions.deleteTodo(todo.todoIndex) } complete={false} name={`Delete`}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom:7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default connect(state => state) (Todo);