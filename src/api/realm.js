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
    properties: {}
};


// When we want to retain data between migrations, we should setup a proper migration schema:
// https://realm.io/docs/javascript/latest/index.html#schema-version
export default new Realm(
    {schema: [HabitEntry, Habit, Calendar],
    schemaVersion: 3
});

