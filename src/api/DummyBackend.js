import User from "../entities/User";

users = [];
userGroups = [];
habits = [];

users.push(new User(1, "Jakob"));
users.push(new User(2, "Danne"));
users.push(new User(3, "Johan"));
users.push(new User(4, "Martin"));

export function getUserFromBackend(userID) {

    const user_list = getUserList();
    for (let i = 0; i < user_list.length; i++) {
        let user = user_list[i];
        if (user.userID === userID) {
            return user;
        }
    }

    throw Error("Didn't find user with ID: " + userID);
}

export function addUserToBackend(user) {
    users.push(user);
}

export function getAllUsersFromBackend() {
    return users;
}

export function removeUserFromList(userID) {

}

function removeUser(user) {

    let removePos = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i].userID === user.userID) {
            removePos = i;
            break;
        }
    }

    if (removePos !== -1) {
        users.splice(users.indexOf(user), 1);
        return true;
    }
    else {
        return false;
    }
}



/* Not implemented yet */


function addUserGroup(group) {
    userGroups.push(group);
}

function removeUserGroup(group) {
    userGroups.splice(userGroups.indexOf(group), 1);
}

function updateUserGroup(group) {
    userGroups[userGroups.indexOf(group)] = group;
}

function updateHabit(habitID, habitEntries) {

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].habitID === habitID) {
            habits[i] = habitEntries;
            console.log("Habit updated");
            return true;
        }
    }
    return false;
}

function getHabits(userID) {

    let userHabits = [];
    for (let i = 0; i < habits.length; i++) {
        if (habits[i].userID = userID) {
            userHabits.push(habits[i]);
        }
    }
    return userHabits;
}
