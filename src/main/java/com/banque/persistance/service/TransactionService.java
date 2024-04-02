package com.banque.persistance.service;

import com.banque.persistance.model.Transaction;

public interface TransactionService {

    void effectuerRetrait(Transaction transaction);

    void effectuerVirementInterne(Transaction transaction);

    void effectuerVirementExterne(Transaction transaction);
}
