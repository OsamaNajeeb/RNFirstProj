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
      name: 'R.H.C',
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
    <ScrollView style={{marginBottom: 20}}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(item => (
          <View style={gridStyle.listItem}>
            <Text style={gridStyle.text}>{item.id}</Text>
            <Text style={gridStyle.text}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const gridStyle = StyleSheet.create({
  listItem: {
    color: 'gold',
    fontSize: 15,
    padding: 5,
    backgroundColor: 'black',
    // fontWeight: '800',
    // marginHorizontal: 10,
    // borderRadius: 20,
    height: 60,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'gold',
    borderWidth: 1,
    margin: 10,
  },

  text: {
    color: 'gold',
    fontSize: 15,
    textAlign: 'center',
  },
});

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
