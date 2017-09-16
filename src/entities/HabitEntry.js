export default class HabitEntry {

    constructor(year, month, day) {
        this.year = year;
        this.day = day;
        this.entryID = this.year + this.day;
        this.status = 'unfinished';
    }

    setStatus = function(status) {
        this.status = status;
    }
}
