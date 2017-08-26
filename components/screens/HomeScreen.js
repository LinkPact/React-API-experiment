import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={{flex: 1}}>
    			<Text>Random stuff</Text>
    			<Text>Login screen</Text>
	     		<Button
		        	title="Join a Calendar"
		        	onPress={() =>
		          		navigate('Calendar')
		        	}
	      		/>
	      		<Button
		        	title="Create a Calendar"
		        	onPress={() =>
		          		navigate('CreateCalendar')
		        	}
	      		/>
      		</View>
    	);
  	}
}