
export class Todo {
    id?: string;
    title?: string;
    done?: boolean;
    insertDate?: Date;

    constructor(
        id: string,
        title: string,
        done: boolean,
        insertDate: Date,
    ) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.insertDate = insertDate;
    }
}