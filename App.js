import React, {Component, useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  NativeModules,
  ScrollView,
  SectionList,
} from 'react-native';
import style from './themes/style';
import UserData from './components/UserData';
import Mistress from './components/Mistress';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn('Bye');
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>Life Cycle {count}</Text>
      <Button title="Update" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

export default App;

const format = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
    // fontWeight: '800',
    // marginHorizontal: 10,
    // borderRadius: 20,
    // height: 60,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    borderColor: 'gold',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: 'gold',
    fontSize: 15,
  },
});
