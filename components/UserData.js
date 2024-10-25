import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  NativeModules,
  ScrollView,
} from 'react-native';

export default UserData = props => {
  const item = props.item;
  return (
    <View style={ze_Styles.box}>
      <Text style={ze_Styles.item}>{item.name}</Text>
      <Text style={ze_Styles.item}>{item.id}</Text>
    </View>
  );
};

const ze_Styles = StyleSheet.create({
  item: {
    color: 'gold',
    fontSize: 15,
    padding: 10,
    backgroundColor: 'black',
    margin: 10,
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'gold',
    marginTop: 10,
  },
});
