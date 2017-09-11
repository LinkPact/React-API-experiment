import React from 'react';
import { Calendar } from 'react-native-calendars';

class HabitCalendar extends Calendar {
	getHabitEntries() {
		return {
		    '2017-09-01': [{startingDay: true, color: 'orange'}],
		    '2017-09-02': [{marked: true, color: 'orange'}],
			'2017-09-03': [{endingDay: true, color: 'orange'}],
		    '2017-09-04': [{startingDay: true, color: 'green'}, {endingDay: true, color: 'green'}]};
	}
	render() {
		const markedDates = this.getHabitEntries();
		return (<Calendar markedDates={markedDates} markingType={'interactive'} />)
	}
}

export default HabitCalendar
