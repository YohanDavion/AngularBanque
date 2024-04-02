package com.banque.persistance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.banque.persistance.model.Compte;

@Repository
public interface CompteRepository extends CrudRepository<Compte,Integer>{

}