'use strict';

import Realm from 'realm';

// Aha, seems like we store JS attributes directly
// Are these then used through the props attribute?
// Example to trace: https://github.com/realm/realm-js/tree/master/examples/ReactExample

class HabitEntry extends Realm.Object {}
HabitEntry.HabitEntry = {
    name: 'Todo',
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
        creationDate: 'date',
        items: {type: 'list', objectType: 'Todo'},
    },
};

export default new Realm({schema: [HabitEntry, Habit]});
