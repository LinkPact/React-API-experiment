import Realm from 'realm';

import { HabitEntry, Habit, Calendar } from 'realm';

// Inspired by thread: https://stackoverflow.com/questions/42213046/realm-react-native-best-practice-user-setup-with-sync

ADDRESS = '10.0.3.2:9080';
SERVER_PATH = 'http://' + ADDRESS;
USER_REALM = 'realm://' + ADDRESS + '/~/my_realm';
GLOBAL_REALM = 'realm://' + ADDRESS + '/global_realm';

let realm = null;
let global_realm = null;

let testparam = null;

export default {
    // realm: null,
    // testparam: null,
    init_test: (value) => {
        console.log("Initializing to: " + value);
        testparam = value;
    },
    get_testparam: () => {
        return testparam;
    },
    get_realm: () => {
        return realm;
    },
    realm: null,
    initialize: (email, password) => {
        console.log("realmContainer: registering user");
        Realm.Sync.User.register(SERVER_PATH, email, password, (error, user) => {
            if (!error) {
                console.log("realmContainer: registration went through without errors");
                realm = new Realm({
                    sync: {
                        user: user,
                        url: USER_REALM,
                    },
                    schema: [HabitEntry, Habit, Calendar]
                });
            }
            else {
                console.log(error);
            }
        })
    },
    login: (email, password) => {
        console.log("realmContainer: attempting login");
        Realm.Sync.User.login(SERVER_PATH, email, password, (error, user) => {
            if (!error) {
                console.log("realmContainer: login successful, syncing to: " + "realm://10.0.3.2:9080/~/userRealm");
                realm = Realm.open({
                    sync: {
                        user: user,
                        url: "realm://10.0.3.2:9080/~/userRealm",
                    },
                    schema: [HabitEntry, Habit, Calendar]
                }).then(realm => {
                    return realm;
                });

            }
            else {
                console.log(error);
            }
            console.log("Realm object: " + realm);
        })
    }
}


// Based on: https://github.com/realm/realm-mobile-platform/issues/189
export function globalRealmSetup (admin_email, admin_pass) {

    console.log("globalRealmSetup");

    Realm.Sync.User.login(SERVER_PATH, admin_email, admin_pass, (error, user) => {

            console.log("Global login");
            console.log(error);
            // console.log(adminUser);
            if (!error) {

                console.log("Admin user synced without errors");

                let realm = Realm.open({
                    sync: {
                        user: user,
                        url: "realm://10.0.3.2:9080/globalRealm",
                    },
                    schema: [HabitEntry, Habit, Calendar]
                }).then(realm => {
                    return realm;
                });

                // let realm = new Realm({
                //     sync: {
                //         user: adminUser,
                //         url: 'realm://object-server-url:9080/globalRealm',
                //     },
                //     schema: [HabitEntry, Habit, Calendar]
                // });

                console.log("First realm sync succeeded");

                // Apply permissions to everyone
                const managementRealm = user.openManagementRealm();
                console.log("Management realm: " + managementRealm);

                let permObj;
                managementRealm.write(() => {
                    permObj = managementRealm.create('PermissionChange', {
                        id: "5",   // implement something that creates a unique id.
                        // id: generateUniqueId(),   // implement something that creates a unique id.
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        mayRead: true,
                        mayWrite: true,
                        mayManage: true,
                        userId: '*', // To apply the permission changes for all Users authorized with the Object Server, specify a userId value of *.
                        realmUrl: 'realm://10.0.3.2:9080/globalRealm',
                    });
                });

                // Listen for `PermissionChange` object to be processed
                managementRealm.objects('PermissionChange').filtered('id = $0', permObj.id).addListener((objects, changes) => {
                    console.log("Permission Status: " + permObj.statusMessage);
                });
            }
            else {
                console.log("GLOBAL: Following error encountered: " + error);
                // console.log("GLOBAL: Stack: " + error.stack);
            }
        })
}





// Realm.open({
//     sync: {
//         user: user,
//         url: 'realm://10.0.3.2:9080/~/my-realm',
//         // url: 'realm://object-server-url:9080/~/my-realm',
//     },
//     schema: [HabitEntry, Habit, Calendar]
// }).then(realm => {
//     console.log("Realm successfully opened");
//     // return callback(null, realm);
//     return realm;
// });


