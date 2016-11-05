import {Holiday} from "./holiday";

export class Person {
    public id: number;
    public first_name: string;
    public last_name: string;
    public email: string;
    public days: number;
    public entry_date: Date;
    public holidays: Holiday[];

    constructor() {}

    public addHoliday(holiday : Holiday) {
        this.holidays.push(holiday);
    }

    public getFullname() : string {
        return this.first_name + ' ' + this.last_name;
    }
}
