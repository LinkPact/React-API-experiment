users = [];
userGroups = [];

function getUsers() {
    return users;
}

function addUser(user) {
    users.push(user);
}

function removeUser(user) {
    users.splice(users.indexOf(user), 1);
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

}

