
export class Portfolio {
    id?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    featuredImageUrl?: string;
    insertDate?: Date;

    constructor(
        id: string,
        title: string,
        description: string,
        isActive: boolean,
        featuredImageUrl: string,
        insertDate: Date,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isActive = isActive;
        this.featuredImageUrl = featuredImageUrl;
        this.insertDate = insertDate;
    }
}