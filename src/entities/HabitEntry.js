class HabitEntry {

    constructor(year, day) {
        this.year = year;
        this.day = day;
        this.entryID = this.year + this.day;
        this.status = 'unfinished';
    }

    setStatus = function(status) {
        this.status = status;
    }
}
