import {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [dok, setName] = useState('Dood');
  return (
    <View>
      <Text style={{fontSize: 20}}>Dodo</Text>
      <Button title="Update Props" onPress={() => setName('Man')} />
      <Comp dok={dok} age={29} />
    </View>
  );
};

const Comp = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 10}}>
      <Text>{props.dok}</Text>
      <Text>{props.age}</Text>
    </View>
  );
};

export default App;
