export class Holiday {

    public id: number;

    public title: string;

    public location: string;

    public start_period: Date;

    public end_period: Date;

    constructor(title: string, start_period: Date) {
        this.title = title;
        this.start_period = start_period;
        this.end_period = start_period;
    }

}
