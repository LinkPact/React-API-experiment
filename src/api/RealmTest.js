'use strict';

// import realm from "./realm";
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

    // const habits = realm.objects('Habit');

    // console.log("--- Number of habits: " + habits.length + " ---");

    Realm.Sync.User.login('http://10.0.3.2:9080', 'jakob.willforss@immun.lth.se', 'realm', (error, user) => {

        console.log("Attempting login!");
        console.log("User: " + user);
        console.log("Error: " +  error);

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
            // console.log("Error: " + new Error(error.message));
            return new Error(error.message);
            // return callback(new Error(error.message));
        }

    });

    // Realm.Sync.User.login('http://10.0.3.2:9080', 'jakob.willforss@immun.lth.se', 'realm', (error, user) => {
    //
    //     if (error) console.log(error.message);
    //
    //     console.log(user);
    //
    // });

    // Realm.Sync.User.register("http://127.0.0.1:9080", "jakob.willforss@test.com", "testpass", (error, user) => {
    //
    //     console.log("Registering test");
    //
    //     if (error) console.log(error);
    //
    //     console.log(user);
    //
    // });



    // let user = Realm.Sync.User.current;
    // if (user) {
    //     let synchedRealm = new Realm({
    //         sync: {
    //             user: user,
    //             url: 'realm://1.2.3.4:9080/~/my-realm',
    //         },
    //         schema: [Model1Schema, Model2Schema]
    //     });
    //     return synchedRealm;
    // }

// otherwise continue with login flow:

    // Realm.Sync.User.login('http://1.2.3.4:9080', 'test@email.com', 'password', (error, user) => {
//...




    // Realm.Sync.User.registerWithProvider('http://127.0.0.1:9080', 'facebook', accessToken, (error, user) => {
    //     if (error) console.log(error);
    //
    //     console.log(user);
    //
    //     const TestSchema = {
    //         name: 'Test',
    //         properties: {
    //             name: 'string',
    //             email: 'string'
    //         }
    //     };
    //     const realm = new Realm({
    //         sync: {
    //             user: user,
    //             url: 'realm://127.0.0.1:9080/~/REALM'
    //         },
    //         schema: [TestSchema]
    //     });
    //     realm.write(() => {
    //         let test = realm.create('Test', {
    //             "name": "test",
    //             "email": "test@test.com"
    //         })
    //     });
    //     const obj = realm.object("Test");
    //     console.log(obj);
    // });
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

