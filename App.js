import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  NativeModules,
} from 'react-native';
import style from './themes/style';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Anvil',
    },
    {
      id: 2,
      name: 'Sam Hyde',
    },
    {
      id: 3,
      name: 'Peter Griffin',
    },
    {
      id: 4,
      name: 'Brucie',
    },
    {
      id: 10,
      name: 'Tony Vercitti',
    },
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={format.listItem}>
            <Text style={format.text}>{item.name}</Text>
            <Text style={format.text}>{item.id}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
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
