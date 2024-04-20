import { CompteModel } from "./compte-model";

export class VirementModel {
    id: number;
    idCompteEmetteur: number;
    idCompteDestinataire: number;
    montant: number;
    date: Date;

    constructor(id: number,idCompteEmetteur: number, idCompteDestinataire: number, montant: number,date: Date) {
        this.id = id;
        this.idCompteEmetteur = idCompteEmetteur;
        this.idCompteDestinataire = idCompteDestinataire;
        this.montant = montant;
        this.date = date;
    }
}