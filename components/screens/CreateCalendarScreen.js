import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class CreateCalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Create a Calendar',
  	};
  	render() {
   		const { navigate } = this.props.navigation;
    	return (
    		<View style={{flex: 1}}>
    			<Text>Create Calendar</Text>
    			<Text>Create Calendar</Text>
	     		<Button
		        	title="Create new Calendar"
		        	//onPress={() =>
		          	//	navigate('GroupCalendar')
		        	//}
	      		/>
      		</View>
    	);
  	}
}