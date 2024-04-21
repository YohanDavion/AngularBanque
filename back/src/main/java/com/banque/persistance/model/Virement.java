package com.banque.persistance.model;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name="virement")
public class Virement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="idClient_emetteur")
    private Integer idClientEmetteur;

    @Column(name="idCompte_emetteur")
    private Integer idCompteEmetteur;

    @Column(name="idClient_destinataire")
    private Integer idClientDestinataire;

    @Column(name="idCompte_destinataire")
    private Integer idCompteDestinataire;

    @Column(name="montant")
    private Integer montant;

    @CreationTimestamp
    @Column(name = "date")
    private Date date;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getIdCompteEmetteur() {
        return idCompteEmetteur;
    }

    public void setIdCompteEmetteur(Integer idCompteEmetteur) {
        this.idCompteEmetteur = idCompteEmetteur;
    }

    public Integer getIdCompteDestinataire() {
        return idCompteDestinataire;
    }

    public void setIdCompteDestinataire(Integer idCompteDestinataire) {
        this.idCompteDestinataire = idCompteDestinataire;
    }

    public Integer getMontant() {
        return montant;
    }

    public void setMontant(Integer montant) {
        this.montant = montant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public Integer getIdClientEmetteur() {
        return idClientEmetteur;
    }

    public void setIdClientEmetteur(Integer idClientEmetteur) {
        this.idClientEmetteur = idClientEmetteur;
    }

    public Integer getIdClientDestinataire() {
        return idClientDestinataire;
    }

    public void setIdClientDestinataire(Integer idClientDestinataire) {
        this.idClientDestinataire = idClientDestinataire;
    }
}