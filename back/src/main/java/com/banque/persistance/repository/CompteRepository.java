package com.banque.persistance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.banque.persistance.model.Compte;

import jakarta.transaction.Transactional;

@Repository
public interface CompteRepository extends CrudRepository<Compte,Integer>{

    @Query("SELECT c FROM Compte c WHERE c.client.id = :clientId")
    List<Compte> findByClientId(@Param("clientId") Integer clientId);

    @Transactional
    @Modifying
    @Query("delete FROM Compte c WHERE c.client.id = :clientId")
    void deleteByClientId(@Param("clientId") Integer clientId);
}