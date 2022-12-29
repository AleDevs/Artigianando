
export class Portfolio {
    id?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    insertDate?: Date;

    constructor(
        id: string,
        title: string,
        description: string,
        isActive: boolean,
        insertDate: Date,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isActive = isActive;
        this.insertDate = insertDate;
    }
}