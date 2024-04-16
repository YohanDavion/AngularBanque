import { ClientModel } from './client-model';

export class CompteModel {
    id: number;
    numero: number;
    client: ClientModel;
    balance: number;
    accountName: string;

    constructor(id: number,numero: number, client: ClientModel, balance: number,accountName: string) {
        this.id = id;
        this.numero = numero;
        this.client = client;
        this.balance = balance;
        this.accountName = accountName;
    }
}