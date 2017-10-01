import React from 'react';
import { Calendar } from 'react-native-calendars';
import HabitCalendarService from './HabitCalendarService';
import HabitEntry from './HabitEntry';
import HabitEntryService from './HabitEntryService';

class HabitCalendar extends Calendar {
    constructor(props) {
        super(props)
        this.state = ({markedDates : this.getHabitEntries()})
    }

    getHabitEntries() {
        const habitEntries = HabitCalendarService.findAllHabits()
        const calendarHabitEntries = {}
        let prev = false
        habitEntries.forEach((h,i,a) => {

            calendarHabitEntries[HabitCalendar.habitToString(h)] = [{startingDay: true, color: 'green'}, {endingDay: true, color: 'green', textColor:'white'}]
        });
        return calendarHabitEntries
    }
    render() {
        return (<Calendar 
            markedDates={ this.state.markedDates } 
            markingType={'interactive'}
            onDayPress={(day)=>{
                if (HabitEntryService.existsHabitEntry(day)) {
                    HabitEntryService.removeHabitEntry(day)
                } else {
                    HabitEntryService.addHabitEntry(day);
                }
                this.updateState();
            }}

            />)
    }

    updateState () {

        this.setState({markedDates : this.getHabitEntries()})
        this.forceUpdate()
    }

    static habitToString (h) {
        return ''+h.year+'-'+pad(h.month,2)+'-'+pad(h.day,2)
    }
}

export default HabitCalendar


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}