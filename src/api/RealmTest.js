'use strict';

// import realm from "./realm";
import Realm from "realm";

import { HabitEntry, Habit, Calendar } from "./realm";
// import { HabitEntry, Habit, Calendar, UserID, UserIDs } from "./realm";

import realmContainer from "./realm-container";

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


    console.log("--- Attempting realmContainer login");
    realmContainer.test("TESTINPUT");
    // realmContainer.initialize('jakob.willforss@immun.lth.se', 'realm');
    realmContainer.login('jakob.willforss@immun.lth.se', 'realm');

    // sleep(1000);

    // console.log(realmContainer.realm);
    // console.log("--- Attempt ended (successful or not) ---");


    // const REALM_SERVER = 'http://10.0.3.2:9080';
    // console.log("Before login attempt");
    // let sync_realm = userLoginSync(REALM_SERVER, 'jakob.willforss@hotmail.com', 'ahbrJGZS2w8W');
    // console.log("Received realm: " + sync_realm);
    // globalRealmSetup(REALM_SERVER, 'jakob.willforss@hotmail.com', 'ahbrJGZS2w8W');
}

export function checkRealmTest() {
    console.log("Checking realm test");
    console.log(realmContainer.realm);
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


function globalRealmSetup (realm_server, admin_email, admin_pass) {

    console.log("globalRealmSetup");

    Realm.Sync.User.login(realm_server, admin_email, admin_pass,
        (error, adminUser) => {
            if (!error) {

                console.log("Admin user synced without errors");

                let realm = new Realm({
                    sync: {
                        user: adminUser,
                        url: 'realm://object-server-url:9080/globalRealm',
                    },
                    schema: [HabitEntry, Habit, Calendar]
                });

                console.log("First realm sync succeeded");

                // Apply permissions to everyone
                const managementRealm = user.openManagementRealm();
                console.log("Management realm: " + managementRealm);

                let permObj;
                managementRealm.write(() => {
                    permObj = managementRealm.create('PermissionChange', {
                        id: 1,   // implement something that creates a unique id.
                        // id: generateUniqueId(),   // implement something that creates a unique id.
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        userId: '*', // To apply the permission changes for all Users authorized with the Object Server, specify a userId value of *.
                        realmUrl: 'realm://object-server-url:9080/globalRealm',
                    });
                });

                // Listen for `PermissionChange` object to be processed
                managementRealm.objects('PermissionChange').filtered('id = $0', permObj.id).addListener((objects, changes) => {
                    console.log("Permission Status: " + permObj.statusMessage);
                });
            }
            else {
                console.log("Following error encountered: " + error.message);
                console.log("Stack: " + error.stack);
            }
        })
}


