package com.banque.persistance.model;

import jakarta.persistence.*;

@Entity
@Table(name="compte")
public class Compte {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name="numero", length = 20)
    private Long numero;
    
    @Column(name="accountName")
    private String accountName;

    @ManyToOne
    @JoinColumn(name="idClient")
    private Client client;
    
    @Column(name="balance")
    private double balance;

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
    
    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }
}
