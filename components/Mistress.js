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
          {this.props.name}
        </Text>
        <TextInput placeholder={this.props.name} />
        <Button title={this.props.name} />
      </View>
    );
  }
}

export default Mistress;
