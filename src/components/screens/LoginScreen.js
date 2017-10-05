import React from 'react';
import { Text, TextInput, View, Button, Navigator, Alert } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
      title: 'Login',
    };

  state = {
    username: "",
    password: "",
  }

  onSubmit = () => {
    const { navigate } = this.props.navigation;
    
    // TODO: Authenticate User
    auth_successful = false;

    if (auth_successful) {
      // TODO: Fetch user data
      navigate("Calendar");
    } else {
      Alert.alert('Invalid credentials. Please try again');
    }
  }
  
  render() {

    return (
      <View style={{flex: 1}}>
        <Text>Create Habit</Text>
          <TextInput
            placeholder="Username"
            onChange={ (text) => this.setState({username: text}) } />
          <TextInput 
            placeholder="Password"
            secureTextEntry
            onChange={ (text) => this.setState({password: text}) } />
          <Button
            title="Login"
            onPress={ this.onSubmit }/>
          <Text onPress={ () => Alert.alert('Not implemented') } >
            Register
          </Text>
      </View>
    );
  }
}
