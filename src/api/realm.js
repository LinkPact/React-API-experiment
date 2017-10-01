'use strict';

import Realm from 'realm';

// Aha, seems like we store JS attributes directly
// Are these then used through the props attribute?
// Example to trace: https://github.com/realm/realm-js/tree/master/examples/ReactExample

class HabitEntry extends Realm.Object {}
HabitEntry.schema = {
    name: 'HabitEntry',
    properties: {
        done: {type: 'bool', default: false},
        text: 'string',
        calendar: 'string',
        day: 'int',
        month: 'int',
        year: 'int'
    },
};

class Habit extends Realm.Object {}
Habit.schema = {
    name: 'Habit',
    properties: {
        name: 'string',
        creationDate: 'date'
    },
};


//Not sure what to store here now, but seems to make sense to have it?
class Calendar extends Realm.Object {}
Calendar.schema = {
    name: 'Calendar',
    properties: {
        HabitEntries: {type:'list', objectType:'HabitEntry'}
    }
};


// Not sure if this is needed, but objectType 'string' didn't work for the UserIDs
class UserID extends Realm.Object {}
UserID.schema = {
    name: 'UserID',
    properties: {
        id: 'string'
    },
};

class UserIDs extends Realm.Object {}
UserIDs.schema = {
    name: 'UserIDs',
    properties: {
        UserIDs: {type:'list', objectType:'UserID'}
    }
};


// When we want to retain data between migrations, we should setup a proper migration schema:
// https://realm.io/docs/javascript/latest/index.html#schema-version
export default new Realm(
    {schema: [HabitEntry, Habit, Calendar, UserIDs, UserID],
    schemaVersion: 10
});

