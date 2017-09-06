const Realm = require('realm');


const CarSchema = {
    name: 'Car',
    properties: {
        make: 'string',
        model: 'string',
        miles: {type: 'int', default: 0}
    }
};

const PersonSchema = {
    name: 'Person',
    properties: {
        name:       'string',
        birthday:   'date',
        cars:       {type: 'list', objectType: 'Car'},
        picture:    {type: 'data', optional: true},
    }
};


Realm.open({scheme: [CarSchema, PersonSchema]})
    .then(realm => {

        realm.write(() => {
            const myCar = realm.create('Car', {
                make: 'Honda',
                model: 'Civic',
                miles: 1000,
            });
        myCar.miles += 20;
        });

        const cars = realm.objects('Car').filtered('miles > 1000');

        console.log("Cars length: " + cars.length);

        realm.write(() => {
            const myCar = realm.create('Car', {
                make: 'Ford',
                model: 'Focus',
                miles: 2000,
            });
        });

        console.log("Cars length: " + cars.length);
    });


