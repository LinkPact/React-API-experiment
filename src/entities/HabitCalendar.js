import React from 'react';
import { Calendar } from 'react-native-calendars';
import HabitCalendarService from './HabitCalendarService';
import HabitEntry from './HabitEntry';

class HabitCalendar extends Calendar {
    getHabitEntries() {
        const habitEntries = HabitCalendarService.findAllHabits();
        const calendarHabitEntries = {};
        habitEntries.forEach(h => {
            calendarHabitEntries[HabitEntry.toString(h)] = [{marked: true, color: 'green'}]
        });
        console.log(calendarHabitEntries)
        return calendarHabitEntries;
    }
    render() {
        const markedDates = this.getHabitEntries();
        return (<Calendar markedDates={markedDates} markingType={'interactive'} />)
    }
}

export default HabitCalendar
