import {
    getUserFromBackend,
    addUserToBackend,
    getAllUsersFromBackend
} from "./DummyBackend"


export function getUser(userID) {
    return getUserFromBackend(userID);
}

export function addUser(user) {
    addUserToBackend(user);
}

export function printDebugMessage() {

    console.log("Following users are present in database:");

    const users = getAllUsersFromBackend();
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(user.name);
    }
}
