import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Dood');
  return (
    <View>
      <Text>Hello:{name}</Text>
      <TextInput
        style={format.TextInput}
        placeholder="Fine?"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="But" onPress={() => setName('')} />
    </View>
  );
};

export default App;

const format = StyleSheet.create({
  TextInput: {
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
