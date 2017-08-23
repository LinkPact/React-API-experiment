class HabitEntry {

    constructor(id) {
        this.id = id;
        this.status = 'unfinished';
    }

    setStatus = function(status) {
        this.status = status;
    }
}
