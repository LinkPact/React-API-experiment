import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';


export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Calendar',
  	};
  	render() {
   		const { navigate } = this.props.navigation;
    	return (
    		<View style={{flex: 1}}>
    			<Text>Group Calendar</Text>
    			<Text>Group Calendar</Text>
	     		<Button
		        	title="Create new habit"
		        	//onPress={() =>
		          	//	navigate('GroupCalendar')
		        	//}
	      		/>
	      		<Button
		        	title="My Calendar"
		        	//onPress={() =>
		          	//	navigate('GroupCalendar')
		        	//}
	      		/>
	      		<Button
		        	title="Options"
		        	//Leave calendar (to create a new one)
		        	//onPress={() =>
		          	//	navigate('GroupCalendar')
		        	//}
	      		/>
      		</View>
    	);
  	}
}