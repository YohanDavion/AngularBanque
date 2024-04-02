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
	
	@Override
	public String toString() {
		return "Compte [id=" + id + ", numero=" + numero;
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
}
