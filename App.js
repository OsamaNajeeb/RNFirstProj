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
  SectionList,
} from 'react-native';
import style from './themes/style';
import UserData from './components/UserData';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Hana',
      data: [
        '434cm height',
        '210cm width',
        'White Skin',
        'Blonde Hair',
        'Blue Eyes',
      ],
    },
    {
      id: 2,
      name: 'Umbreen',
      data: [
        '417cm height',
        '198cm width',
        'Light Dark Skin',
        'Dark Brown Hair',
        'Dark Brown Eyes',
      ],
    },
    {
      id: 3,
      name: 'Aparna',
      data: [
        '409cm height',
        '190cm width',
        'Semi-Dark Skin',
        'Dark Brown Hair',
        'Dark Brown Eyes',
      ],
    },
    {
      id: 4,
      name: 'Nancy',
      data: [
        '431cm height',
        '206cm width',
        'Heavy White Skin',
        'Ginger Hair',
        'Green Eyes',
      ],
    },
  ];
  return (
    <View>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 15, marginStart: 30}}>
            {'> '}
            {item}
          </Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 20, color: 'gold'}}>{name}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
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
