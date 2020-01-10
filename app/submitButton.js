import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect, actions } from './context/Store';

const Button = () => (
  <View style={styles.buttonContainer}>    
    <TouchableHighlight
      underlayColor='#efefef'
      onPress={ actions.submitTodo }
      style={styles.button}>
      <Text style={styles.submit}>
        Submit
      </Text>
    </TouchableHighlight>    
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    color: '#666666',
    fontWeight: '600'
  }
})

export default connect(state => state) (Button);