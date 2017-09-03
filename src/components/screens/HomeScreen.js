import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { printDebugMessage } from '../../api/DatabaseAPI';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		// const { debug } = this.printDebugMessage.bind(this);
		return (
    		<View style={{flex: 1}}>
    			<Text>Random stuff!!</Text>
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
				<Button
					onPress={printDebugMessage}
					title="Print users to console"
					color="#005500"
					accessibilityLabel="Send dummy API request"
					style={{padding:5}}
				/>
      		</View>
    	);
  	}
}

