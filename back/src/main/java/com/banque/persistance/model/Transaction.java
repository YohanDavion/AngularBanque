package com.banque.persistance.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name="transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="compte_emetteur_id")
    private Compte compteEmetteur;

    @ManyToOne
    @JoinColumn(name="compte_destinataire_id")
    private Compte compteDestinataire;

    private double montant;

    private Date date;

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Compte getCompteEmetteur() {
        return compteEmetteur;
    }

    public void setCompteEmetteur(Compte compteEmetteur) {
        this.compteEmetteur = compteEmetteur;
    }

    public Compte getCompteDestinataire() {
        return compteDestinataire;
    }

    public void setCompteDestinataire(Compte compteDestinataire) {
        this.compteDestinataire = compteDestinataire;
    }

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
