import realm from "./realm";

export function initRealmTest() {

    console.log("Running initRealmTest");

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
}

