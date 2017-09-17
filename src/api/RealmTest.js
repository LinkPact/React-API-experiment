'use strict';

import realm from "./realm";
import Realm from "realm";


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

    console.log("Number of habits: " + habits.length);

    Realm.Sync.User.login('http://localhost:9080', 'jakob.willforss@hotmail.com', 'ahbrJGZS2w8W', (error, user) => {

        if (!error) {
            Realm.open({
                sync: {
                    user: user,
                    url: 'realm://object-server-url:9080/~/my-realm',
                },
                schema: [HabitEntry, Habit, Calendar]
            }).then(realm => {
                /* ... */
            });
        }

    });
}

