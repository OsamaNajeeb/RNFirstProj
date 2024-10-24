import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import CompanyData from './components/CompanyData';

const name = 'Do';
let age = 3;
var email = 'push ups';

function now() {
  return 'Now!!!';
}

const App = () => {
  const [name, setName] = useState('Dodo');
  const fruit = val => {
    let age = 30;
    console.error('number ' + age);
  };

  function updateName() {
    setName('BoBo');
  }

  return (
    <View>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title="sd" onPress={updateName}></Button>

      {/* <UserData /> */}
      {/* <Button
        title="Sd"
        onPress={() => fruit('Dodo')}
        color={'magenta'}></Button> */}
      {/* <CompanyData /> */}
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text>Name : Dood</Text>
      <Text>Age : 4</Text>
      <Text>Email : 12</Text>
    </View>
  );
};

export default App;
