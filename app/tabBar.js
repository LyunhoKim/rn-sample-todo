import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './tabBarItem';
import { connect, actions } from './context/Store';

const TabBar = ({ type }) => (
  <View style={ styles.container }>
    <TabBarItem type={ type } title='All'
    setType={ () => actions.setType('All') }/>
    <TabBarItem type={ type } border title='Active'
    setType={ () => actions.setType('Active') }/>
    <TabBarItem type={ type } title='Complete'
    setType={ () => actions.setType('Complete') }/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  }
});

export default connect(state => state) (TabBar);