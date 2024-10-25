import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setE] = useState('');
  const [password, setP] = useState('');
  const [display, setDisplace] = useState(false);

  const resetFormData = () => {
    setDisplace(false);
    setName('');
    setE('');
    setP('');
  };

  return (
    <View>
      <TextInput
        style={format.TextInput}
        placeholder="Enter Name Obsessed Brimstone"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={format.TextInput}
        placeholder="Enter Email Obsessed Brimstone"
        onChangeText={text => setE(text)}
        value={email}
      />
      <TextInput
        style={format.TextInput}
        placeholder="Enter Password Obsessed Brimstone"
        onChangeText={text => setP(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={{margin: 20}}>
        <Button title="Print Details" onPress={() => setDisplace(true)} />
      </View>
      <Button title="Clear Details" color={'green'} onPress={resetFormData} />
      <View>
        {display ? (
          <View>
            <Text>User Name : {name}</Text>
            <Text>User Email : {email}</Text>
            <Text>User Password : {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default App;

const format = StyleSheet.create({
  TextInput: {
    color: 'black',
    fontSize: 15,
    backgroundColor: 'white',
    // padding: 20,
    fontWeight: '800',
    marginHorizontal: 10,
    borderRadius: 20,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
});
