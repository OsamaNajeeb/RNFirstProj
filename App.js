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
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn('Obsessed');
  // }, [count]);

  // useEffect(() => {
  //   console.warn('Brimstone');
  // }, [data]);

  return (
    <View>
      <Text style={{fontSize: 30}}>
        {data} O algo {count}
      </Text>
      <Button title="Update" onPress={() => setCount(count + 1)}></Button>
      <Button title="Update" onPress={() => setData(data + 1)}></Button>
      <Users info={{data, count}} />
    </View>
  );
};

export default App;

const Users = props => {
  console.warn(props.info);
  useEffect(() => {
    console.warn('run this code when data is updated');
  }, [props.info.data]);
  return (
    <View>
      <Text style={{fontSize: 30}}>data: {props.info.data}</Text>
      <Text style={{fontSize: 30}}>count: {props.info.count}</Text>
      {/* <Button title="Update" onPress={() => setCount(count + 1)}></Button>
      <Button title="Update" onPress={() => setData(data + 1)}></Button> */}
    </View>
  );
};

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
