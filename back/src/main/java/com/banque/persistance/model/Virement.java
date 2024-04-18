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
    private Long idCompteEmetteur;

    @Column(name="idCompte_destinataire")
    private Long idCompteDestinataire;

    @Column(name="montant")
    private Integer montant;

    @CreationTimestamp
    @Column(name = "date")
    private Date creationDate;
}