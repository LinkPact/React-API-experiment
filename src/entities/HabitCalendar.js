import React from 'react';
import { Calendar } from 'react-native-calendars';
import HabitCalendarService from './HabitCalendarService';
import HabitEntry from './HabitEntry';

class HabitCalendar extends Calendar {
    getHabitEntries() {
        const habitEntries = HabitCalendarService.findAllHabits();
        const calendarHabitEntries = {};
        habitEntries.forEach(h => {
            calendarHabitEntries[HabitCalendar.habitToString(h)] = [{marked: true, color: 'green'}]
        });
        return calendarHabitEntries;
    }
    render() {
        const markedDates = this.getHabitEntries();
        return (<Calendar markedDates={markedDates} markingType={'interactive'} />)
    }

    static habitToString (h) {
        return ''+h.year+'-'+h.month+'-'+h.day;
    }
}

export default HabitCalendar
