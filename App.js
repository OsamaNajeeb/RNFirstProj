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
import style from './themes/style';
import UserData from './components/UserData';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Abby',
      email: 'Abby@h',
    },
    {
      id: 2,
      name: 'Liara',
      email: 'Liara@h',
    },
    {
      id: 3,
      name: 'Aparna',
      email: 'Aparna@h',
    },
    {
      id: 4,
      name: 'Nancy',
      email: 'Nancy@h',
    },
    {
      id: 5,
      name: 'Mizuki',
      email: 'Mizuki@h',
    },
    {
      id: 6,
      name: 'Eimaan',
      email: 'Eimaan@h',
    },
    {
      id: 7,
      name: 'R.H.C',
      email: 'R.H.C@h',
    },
    {
      id: 8,
      name: 'Nadia',
      email: 'Nadia@h',
    },
    {
      id: 9,
      name: 'EDI',
      email: 'EDI@h',
    },
    {
      id: 10,
      name: 'Anna',
      email: 'Anna@h',
    },
    {
      id: 11,
      name: 'Umbreen',
      email: 'Umbreen@h',
    },
    {
      id: 12,
      name: 'Hana',
      email: 'Hana@h',
    },
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
      />
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
