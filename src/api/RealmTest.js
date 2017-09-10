import realm from "./realm";

export function initRealmTest() {

    console.log("Running initRealmTest");

    realm.write(() => {
        realm.create('Habit', {
            name: 'Honda',
            creationDate: new Date(),
        });
    });

    const habits = realm.objects('Habit');

    console.log("Number of habits: " + habits.length);
}

