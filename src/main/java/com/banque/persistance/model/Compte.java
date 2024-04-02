package com.banque.persistance.model;

import jakarta.persistence.*;

@Entity
@Table(name="compte")
public class Compte {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name="numero",length=50)
    private String numero;
    
    @ManyToOne
    @JoinColumn(name="idClient")
    private Client client;
    
    @Column(name="solde")
    private double solde;

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public double getSolde() {
        return solde;
    }

    public void setSolde(double solde) {
        this.solde = solde;
    }
}
