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

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Abby',
    },
    {
      id: 2,
      name: 'Liara',
    },
    {
      id: 3,
      name: 'Aparna',
    },
    {
      id: 4,
      name: 'Nancy',
    },
    {
      id: 5,
      name: 'Mizuki',
    },
    {
      id: 6,
      name: 'Eimaan',
    },
    {
      id: 7,
      name: 'Red Head Chan',
    },
    {
      id: 8,
      name: 'Nadia',
    },
    {
      id: 9,
      name: 'EDI',
    },
    {
      id: 10,
      name: 'Anna',
    },
    {
      id: 11,
      name: 'Umbreen',
    },
    {
      id: 12,
      name: 'Hana',
    },
  ];

  return (
    <View>
      <ScrollView style={{marginBottom: 20}}>
        {users.map(item => (
          <View style={format.listItem}>
            <Text style={format.text}>{item.id}</Text>
            <Text style={format.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const ze_Styles = StyleSheet.create({
  listItem: {
    color: 'gold',
    fontSize: 15,
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
});

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
