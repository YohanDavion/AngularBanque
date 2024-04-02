package com.banque.persistance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.banque.persistance.model.Transaction;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
}
