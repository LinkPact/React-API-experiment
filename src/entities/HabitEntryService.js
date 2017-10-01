import realm from "../api/realm";

let HabitEntryService = {
	addHabitEntry: function(day) {
	    //if (realm.objects('HabitEntry').filtered("timestamp = '" + day.timestamp + "'").length) return;
	    realm.write(() => {
	    	const habitEntry = {done: true, day: day.day, year: day.year, month:day.month, text:'random',calendar:'', dateString:day.dateString}
	      	realm.create('HabitEntry', habitEntry);
	    })
	},
	removeHabitEntry: function(day) {
	    const res = realm.objects('HabitEntry').filtered("dateString = '" + day.dateString + "'")
	    realm.write(() => {
	    	realm.delete(res);
	    })
	},
	existsHabitEntry: function(day) {
	    const res = realm.objects('HabitEntry').filtered("dateString = '" + day.dateString + "'")
	    return !(Object.keys(res).length === 0)

	}
}

export default HabitEntryService;

