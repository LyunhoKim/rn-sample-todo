import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Store from './context/Store';

const { Consumer } = Store;

const Input = () => ( 
  <View style={ styles.inputContainer }>
    <Consumer>
      {({data, inputChange}) => (
        <TextInput 
          value={ data.inputValue }
          style={ styles.input } 
          placeholder='What needs to be done'
          placeholderTextColor='#CACACA'
          selectionColor='#666666'
          onChangeText={ inputChange }
        />
      )}
    </Consumer>
  </View>

)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default Input;