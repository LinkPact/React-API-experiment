'use strict';

// import realm from "./realm";
import Realm from "realm";

import { HabitEntry, Habit, Calendar } from "./realm";
// import { HabitEntry, Habit, Calendar, UserID, UserIDs } from "./realm";

import realmContainer from "./realm-container";
import { globalRealmSetup } from "./realm-container";

export function initRealmTest() {

    console.log("Running initRealmTest");

    // Next steps:
    // - Understand user-based system. Are we successfully syncing now?
    // - Understand difference between user-based system and admin-based.
    // - Use this understanding to get workable initial admin sync and permission assignment working
    // - Figure out how to use userids to find other realms
    // - Figure out how to allow read permissions between realms
    // - Figure out how to retrieve information in controlled fashion from parallel realms
    // - Retrieve this information in controlled fashion

    globalRealmSetup('jakob.willforss@hotmail.com', 'admin');

    // console.log(realmContainer);
    // realmContainer.init_test("hello!");
    // console.log(realmContainer.get_testparam());
    //
    // console.log("--- Attempting realmContainer login");
    // realmContainer.login('jakob.willforss@hotmail.com', 'admin');
    // // realmContainer.login('jakob.willforss@immun.lth.se', 'realm');
    //
    // let my_realm = realmContainer.get_realm();
    // console.log("My realm: " + my_realm);
}

export function checkRealmTest() {
    console.log("Checking realm test");
    console.log(realmContainer.get_realm());
}

function sleep(milliseconds) {
    let currentTime = new Date().getTime();
    while (currentTime + milliseconds >= new Date().getTime()) {}
}

function userLoginSync(server, user, pass) {
    Realm.Sync.User.login('http://10.0.3.2:9080', 'jakob.willforss@immun.lth.se', 'realm', (error, user) => {

        console.log("Attempting login!");
        console.log("User: " + user);
        console.log("Error: " +  error);

        if (!error) {
            console.log("Login succeeded");

            // Realm.open({
            //     sync: {
            //         user: user,
            //         url: 'realm://object-server-url:9080/global_realm',
            //     },
            //     schema: [HabitEntry, Habit, Calendar]
            // }).then(realm => {
            //     // return callback(null, realm);
            //     return realm;
            // });

            Realm.open({
                sync: {
                    user: user,
                    url: 'realm://10.0.3.2:9080/~/my-realm',
                    // url: 'realm://object-server-url:9080/~/my-realm',
                },
                schema: [HabitEntry, Habit, Calendar]
            }).then(realm => {
                console.log("Realm successfully opened");
                // return callback(null, realm);
                return realm;
            });
        }
        else {
            // console.log("Error: " + new Error(error.message));
            return new Error(error.message);
            // return callback(new Error(error.message));
        }

    });
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


