'use strict';

// import realm from "./realm";
import Realm from "realm";

import { HabitEntry, Habit, Calendar } from "./realm";
// import { HabitEntry, Habit, Calendar, UserID, UserIDs } from "./realm";

import realmContainer from "./realm-container";
import { globalRealmSetup } from "./realm-container";

export function initRealmTest() {

    let user1 = {"email":"user1@test.com", "pass":"user1"};
    let user2 = {"email":"user2@test.com", "pass":"user2"};
    let user3 = {"email":"user3@test.com", "pass":"user3"};
    // let users = {user1:user1, user2:user2, user3:user3};

    console.log("Running initRealmTest");

    realmContainer.login('user1@test.com', 'user1');
    realmContainer.login('user2@test.com', 'user2');
    realmContainer.login('user3@test.com', 'user3');

}

function writeHabitEntry() {
    realm.write(() => {
        realm.create('Habit', {
            name: 'Honda',
            creationDate: new Date(),
        });
        realm.create('HabitEntry', {
            done: false,
            day: 15,
            month: 11,
            year: 2017,
            text: '',
            calendar: ''
        });
        realm.create('HabitEntry', {
            done: false,
            day: 18,
            month: 11,
            year: 2017,
            text: '',
            calendar: ''
        });
        realm.create('HabitEntry', {
            done: false,
            day: 12,
            month: 11,
            year: 2017,
            text: '',
            calendar: ''
        });
    });

    const habits = realm.objects('Habit');

    console.log("--- Number of habits: " + habits.length + " ---");
}


