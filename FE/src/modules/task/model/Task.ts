export class Task {
    private _id: number;
    private _description: string;
    private _date: Date;
    private _isDone: boolean;
    private _active: boolean;



    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }

    public get description(): string {
        return this._description;
    }
    public set description(description: string) {
        this._description = description;
    }

    public get date(): Date {
        return this._date;
    }
    public set date(date: Date) {
        this._date = date;
    }

    public get isDone(): boolean {
        return this._isDone;
    }
    public set isDone(isDone: boolean) {
        this._isDone = isDone;
    }

    public get active(): boolean {
        return this._active;
    }
    public set active(active: boolean) {
        this._active = active;
    }



    public get toJson() {
        return {
            id: this.id ? this.id : null,
            description: this.description,
            date: this.date,
            done: this.isDone,
            active: this.active,
        }
    }

    public fromJson(dataValue: any) {
        this.id = dataValue.id;
        this.description = dataValue.description;
        this.date = dataValue.date;
        this.isDone = dataValue.done;
        this.active = dataValue.active;
    }
}