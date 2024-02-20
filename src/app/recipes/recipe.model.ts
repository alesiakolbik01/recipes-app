export interface Recipe {
    id: number,
    name: string,
    description: string,
    imagePath: string,
    createDate: Date,
    modifiedDate?: Date
}