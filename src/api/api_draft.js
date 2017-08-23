users = [];
userGroups = [];
habits = [];

function getUsers() {
    return users;
}

function addUser(user) {
    users.push(user);
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
