package com.banque.persistance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.banque.persistance.model.Virement;

public interface VirementRepository extends JpaRepository<Virement, Integer> {
}