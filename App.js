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
  const [show, setShow] = useState(false);
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20}}>
        Show/Hide Garbage
      </Text>
      <Button title="Hide" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  let timer = setInterval(() => {
    console.warn('Timer Initiated');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue'}}>Oops</Text>
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
