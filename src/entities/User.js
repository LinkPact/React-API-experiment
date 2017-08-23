class User {

    constructor(userID, name) {
        this.userID = userID;
        this.name = name;
        this.habits = [];
    }

    addHabit = function(habit) {
        this.habits.add(habit);
    };
}
