import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import CalendarScreen from './src/components/screens/CalendarScreen';
// import CalendarScreen from './src/components/screens/CalendarScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import CreateCalendarScreen from './src/components/screens/CreateCalendarScreen';
import CreateHabitScreen from './src/components/screens/CreateHabitScreen';
import RealmTestScreen from './src/components/screens/RealmTestScreen';
import {
	StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  CreateCalendar: { screen: CreateCalendarScreen },
  CreateHabit: {screen: CreateHabitScreen},
  RealmTestScreen: {screen: RealmTestScreen},
});
export default App;
