import {Holiday} from "./holiday";

export class Person {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    days: number;
    entry_date: Date;
    holidays: Holiday[];

    constructor(first_name:string,last_name:string,days:number,entry_date:Date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.days = days;
        this.entry_date = entry_date;
    }

    public addHoliday(holiday : Holiday) {
        this.holidays.push(holiday);
    }

    public getFullname() : string {
        return this.first_name + ' ' + this.last_name;
    }
}
