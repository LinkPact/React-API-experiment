import Realm from 'realm';

import { HabitEntry, Habit, Calendar } from 'realm';

// Inspired by thread: https://stackoverflow.com/questions/42213046/realm-react-native-best-practice-user-setup-with-sync

ADDRESS = '10.0.3.2:9080';
SERVER_PATH = 'http://' + ADDRESS;
USER_REALM = 'realm://' + ADDRESS + '/~/my_realm';
GLOBAL_REALM = 'realm://' + ADDRESS + '/global_realm';

let realm = null;
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
                this.realm = new Realm({
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
                this.realm = Realm.open({
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
                console.log("realmContainer: login unsuccessful");
                console.log(error);
            }

            console.log("Realm object: " + this.realm);
        })
    },
    show_realm_object: () => {
        console.log("Running show_realm_object");
        console.log(this.realm)
    },
    test: (input) => {console.log("Input to test is: " + input)},
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


