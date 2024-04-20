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

    @Column(name="idCompte_emetteur")
    private Integer idCompteEmetteur;

    @Column(name="idCompte_destinataire")
    private Integer idCompteDestinataire;

    @Column(name="montant")
    private Integer montant;

    @CreationTimestamp
    @Column(name = "date")
    private Date creationDate;

    
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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}