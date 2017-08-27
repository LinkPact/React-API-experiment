import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import sendAPIRequestClick from '../../src/api/api_draft.js';


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
                        <Button 
                            onPress={sendAPIRequestClick}
                            title="Send dummy API request"
                            color="#005500"
                            accessibilityLabel="Send dummy API request"
                            style={{padding:5}}
                        />
      		</View>
    	);
  	}
}
