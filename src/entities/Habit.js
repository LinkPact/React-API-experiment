class Habit {

    constructor(id, name, descr) {
        this.id = id;
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
