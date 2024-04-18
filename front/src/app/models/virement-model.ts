import { CompteModel } from "./compte-model";

export class VirementModel {
    id: number;
    idCompteEmetteur: number;
    idCompteDestinataire: number;
    montant: number;

    constructor(id: number,idCompteEmetteur: number, idCompteDestinataire: number, montant: number) {
        this.id = id;
        this.idCompteEmetteur = idCompteEmetteur;
        this.idCompteDestinataire = idCompteDestinataire;
        this.montant = montant;
    }
}