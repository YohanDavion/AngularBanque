export class ClientModel {
    id: number;
    firstname: string;
    lastname: string;
    creationDate: Date;

    constructor(id: number,firstname: string, lastname: string,creationDate: Date) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.creationDate = creationDate;
    }
}