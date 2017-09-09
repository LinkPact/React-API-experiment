'use strict';

import Realm from 'realm';

// Aha, seems like we store JS attributes directly
// Are these then used through the props attribute?
// Example to trace: https://github.com/realm/realm-js/tree/master/examples/ReactExample

class HabitEntry extends Realm.Object {}
HabitEntry.schema = {
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

class Car extends Realm.Object {}
Car.schema = {
    name: 'Car',
    properties: {
        make: 'string',
        model: 'string',
        miles: {type: 'int', default: 0}
    }
};

class Person extends Realm.Object {}
Person.schema = {
    name: 'Person',
    properties: {
        name:       'string',
        birthday:   'date',
        cars:       {type: 'list', objectType: 'Car'},
        picture:    {type: 'data', optional: true},
    }
};

// class Car extends Realm.Object {}
// Car.schema = CarSchema;
//
// class Person extends Realm.Object {}
// Person.schema = PersonSchema;

export default new Realm({schema: [HabitEntry, Habit, Car, Person]});
