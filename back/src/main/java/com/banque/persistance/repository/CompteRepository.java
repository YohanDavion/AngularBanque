package com.banque.persistance.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.banque.persistance.model.Compte;

@Repository
public interface CompteRepository extends CrudRepository<Compte,Integer>{

    @Query("SELECT c FROM Compte c WHERE c.client.id = :clientId")
    List<Compte> findByClientId(@Param("clientId") Integer clientId);
}