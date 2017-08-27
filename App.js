import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import CalendarScreen from './components/screens/CalendarScreen';
import HomeScreen from './components/screens/HomeScreen';
import CreateCalendarScreen from './components/screens/CreateCalendarScreen';
import {
	StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  CreateCalendar: { screen: CreateCalendarScreen },
});
export default App;
