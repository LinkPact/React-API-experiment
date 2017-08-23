class Habit {

    constructor(habitID, userId, name, descr) {

        this.habitID = habitID;
        this.userID = userID;
        this.name = name;
        this.descr = descr;
        this.habitEntries = this.initializeHabitEntries(2017);
    }

    initializeHabitEntries = function(year) {
        return [];
    };

    assignHabitEntry = function(day, habitStatus) {
        this.habitEntries[day] = habitStatus;
    };
}
