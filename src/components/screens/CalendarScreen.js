import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';
import HabitCalendar from '../../entities/HabitCalendar';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Calendar',
  	};
  	render() {
   		const { navigate } = this.props.navigation;
    	return (
    		<View style={{flex: 1}}>
    			<Text>Group Calendar</Text>
    			<HabitCalendar />
	     		<Button
		        	title="Create new habit"
		        	onPress={() =>
		          		navigate('CreateHabit')
		        	}
	      		/>
	      		<Button
		        	title="My Calendar"
		        	onPress={() =>
		          		navigate('GroupCalendar')
		        	}
	      		/>
	      		<Button
		        	title="Options"
		        	onPress={() =>
		          	  navigate('GroupCalendar')
		        	}
	      		/>
      		</View>
    	);
  	}
}
