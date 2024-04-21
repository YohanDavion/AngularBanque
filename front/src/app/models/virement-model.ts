import { CompteModel } from "./compte-model";

export class VirementModel {
    id: number;
    idClientEmetteur: number;
    idCompteEmetteur: number;
    idClientDestinataire: number;
    idCompteDestinataire: number;
    montant: number;
    date: Date;

    constructor(id: number,idCompteEmetteur: number, idCompteDestinataire: number, montant: number,date: Date, idClientEmetteur: number, idClientDestinataire: number) {
        this.id = id;
        this.idClientEmetteur = idClientEmetteur;
        this.idCompteEmetteur = idCompteEmetteur;
        this.idClientDestinataire = idClientDestinataire;
        this.idCompteDestinataire = idCompteDestinataire;
        this.montant = montant;
        this.date = date;
    }
}