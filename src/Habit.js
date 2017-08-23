class Habit {

    constructor(name, descr) {
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
