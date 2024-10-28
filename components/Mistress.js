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

class Mistress extends Component {
  render() {
    return (
      <View style={{marginVertical: 20}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Dood
        </Text>
        <TextInput placeholder="Enter Name Saar" />
        <Button title="Click Me >:)" />
      </View>
    );
  }
}

export default Mistress;
