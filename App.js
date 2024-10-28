import React, {Component, useState} from 'react';
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

class App extends Component {
  fruit = () => {
    console.warn('Tomoto');
  };
  render() {
    return (
      <View style={{padding: 20}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Dood
        </Text>
        <TextInput placeholder="Enter Name Saar" />
        <Button title="Click Me >:)" onPress={this.fruit} />
        <Mistress />
      </View>
    );
  }
}

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
