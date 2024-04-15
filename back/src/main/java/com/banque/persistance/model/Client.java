package com.banque.persistance.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="client")
public class Client {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="lastname",length=50)
	private String lastname;
	
	@Column(name="firstname",length=50)
	private String firstname;

	@CreationTimestamp
    @Column(name = "creation_date")
    private Date creationDate;
	
	@OneToMany(mappedBy="client")
	private List<Compte> comptes = new ArrayList<>();

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
}
