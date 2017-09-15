import realm from "../api/realm";

let HabitCalendarService = {
	findAllHabits: function () {
    	return realm.objects('HabitEntry');
  }
}

export default HabitCalendarService;