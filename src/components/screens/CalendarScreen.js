import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';
import { Calendar } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Calendar',
  	};
  	render() {
   		const { navigate } = this.props.navigation;
    	return (
    		<View style={{flex: 1}}>
    			<Text>Group Calendar</Text>
    			<Calendar 
				   markedDates={{
				    '2017-09-01': [{startingDay: true, color: 'orange'}],
				    '2017-09-02': [{marked: true, color: 'orange'}],
     				 '2017-09-03': [{endingDay: true, color: 'orange'}],
				     '2017-09-04': [{startingDay: true, color: 'green'}, {endingDay: true, color: 'green'}]}}
				     markingType={'interactive'}

    			/>
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