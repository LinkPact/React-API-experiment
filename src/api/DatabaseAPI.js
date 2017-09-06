import {
    getUserFromBackend,
    addUserToBackend,
    getAllUsersFromBackend,
    addHabitToBackend,
    removeHabitFromBackend,
    getHabitFromBackend,
    getAllHabitsFromBackend
} from "./DummyBackend"

export function getUser(userID) {
    return getUserFromBackend(userID);
}

export function addUser(user) {
    addUserToBackend(user);
}

export function getAllUsers() {
    return getAllUsersFromBackend();
}

export function addHabit(habit) {
    addHabitToBackend(habit);
}

export function getHabit(habitID) {
    return getHabitFromBackend(habitID);
}

export function removeHabit(habitID) {
    return removeHabitFromBackend(habitID);
}

export function getAllHabits() {
    return getAllHabitsFromBackend();
}

export function printDebugMessage() {

    console.log("Following users are present in database:");

    const users = getAllUsersFromBackend();
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(user.name);
    }

    console.log("Following habits are present in database:");

    const habits = getAllHabitsFromBackend();
    for (let i = 0; i < habits.length; i++) {
        let habit = habits[i];
        console.log(habit.name + ": " + habit.descr);
    }
}
