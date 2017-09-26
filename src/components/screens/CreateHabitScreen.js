import React from 'react';
import { Text, TextInput, View, Button, Navigator, Alert } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Realm from 'realm';
import realm from '../../api/realm';
import { HabitEntry } from '../../api/realm';

export default class CreateHabitScreen extends React.Component {
  static navigationOptions = {
      title: 'Create habit',
  	};

  state = {
    name: "",
    description: "",
  }

  onSubmit = () => {
    const { navigate } = this.props.navigation;
    
    if (this.state.name) {
      realm.write(() => {
        realm.create('Habit', {
          name: this.state.name,
          description: this.state.description,
          creationDate: new Date()
        });
      });
      
    const habits = realm.objects('Habit');
    for (const key in habits) {
      console.log("Habit: " + key);
      console.log("name: " + habits[key].name);
      console.log("description: " + habits[key].description);
      console.log("\n");
    }
      navigate("Calendar");
    } else {
      Alert.alert('Please enter a name for the habit.');
    }
  }
  
  onNameFieldChanged = (input) => {
    this.setState({name: input});
  }

  onDescriptionFieldChanged = (input) => {
    this.setState({description: input});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Create Habit</Text>
          <TextInput 
            placeholder="Name"
            onChangeText={ this.onNameFieldChanged } />
          <TextInput 
            placeholder="Description"
            onChangeText={ this.onDescriptionFieldChanged } />
          <Button
            title="Okay"
            onPress={ this.onSubmit } />
      </View>
    );
  }
}
