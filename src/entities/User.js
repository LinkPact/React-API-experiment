class User {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.habits = [];
    }

    addHabit = function(habit) {
        this.habits.add(habit);
    };
}
