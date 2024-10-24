import {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import OutFormat from './themes/style';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          fontWeight: 'bold',
          backgroundColor: 'black',
          padding: 20,
        }}>
        Blue
      </Text>

      <Text style={format.textBox}>Red</Text>
      <Text style={OutFormat.textBox}>O algo</Text>
      <Text style={[format.textBox, OutFormat.textBox, {marginTop: 10}]}>
        dude
      </Text>
    </View>
  );
};

const format = StyleSheet.create({
  textBox: {
    color: 'red',
    fontSize: 30,
    backgroundColor: 'grey',
    // padding: 20,
    fontWeight: '800',
    marginHorizontal: 10,
    borderRadius: 20,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: '#666600',
    borderWidth: 5,
  },
});

export default App;
