'use strict';

import realm from "./realm";
import Realm from "realm";

import { HabitEntry, Habit, Calendar } from "./realm";


export function initRealmTest() {

    console.log("Running initRealmTest");

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

    const users = Realm.Sync.User.all;
    for (const key in users) {
        console.log("User: " + key);
    }

    Realm.Sync.User.login('http://127.0.0.1:9080', 'jakob.willforss@hotmail.com', 'ahbrJGZS2w8W', (error, user) => {

        console.log("Attempting login!");

        if (!error) {
            console.log("No error!");
            Realm.open({
                sync: {
                    user: user,
                    url: 'realm://object-server-url:9080/~/my-realm',
                },
                schema: [HabitEntry, Habit, Calendar]
            }).then(realm => {
                // return callback(null, realm);
                return realm;
            });
        }
        else {
            console.log("Error: " + callback(new Error(error.message)));
            return new Error(error.message);
            // return callback(new Error(error.message));
        }

    });
}

// Realm.Sync.User[action](config.auth_uri, username, password,
//     (error, user) => {
//         if (error) {
//             return callback(new Error(error.message));
//         } else {
//             realm = new Realm({
//                 schema: [Task, TaskList],
//                 sync: {
//                     user,
//                     url: config.db_uri
//                 },
//                 path: config.db_path
//             });
//             return callback(null, realm); // TODO errors
//         }
//     }
// );

