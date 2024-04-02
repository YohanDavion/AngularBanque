package com.banque.persistance.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banque.persistance.model.Compte;
import com.banque.persistance.model.Transaction;
import com.banque.persistance.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public void effectuerRetrait(Transaction transaction) {
        Compte compteEmetteur = transaction.getCompteEmetteur();
        double nouveauSolde = compteEmetteur.getSolde() - transaction.getMontant();
        if (nouveauSolde < 0) {
            throw new RuntimeException("Solde insuffisant pour effectuer le retrait.");
        }
        compteEmetteur.setSolde(nouveauSolde);
        transactionRepository.save(transaction);
    }

    @Override
    public void effectuerVirementInterne(Transaction transaction) {
        Compte compteEmetteur = transaction.getCompteEmetteur();
        double nouveauSoldeEmetteur = compteEmetteur.getSolde() - transaction.getMontant();
        if (nouveauSoldeEmetteur < 0) {
            throw new RuntimeException("Solde insuffisant pour effectuer le virement interne.");
        }
        compteEmetteur.setSolde(nouveauSoldeEmetteur);
        Compte compteDestinataire = transaction.getCompteDestinataire();
        compteDestinataire.setSolde(compteDestinataire.getSolde() + transaction.getMontant());
        transactionRepository.save(transaction);
    }

    @Override
    public void effectuerVirementExterne(Transaction transaction) {
        Compte compteEmetteur = transaction.getCompteEmetteur();
        double nouveauSoldeEmetteur = compteEmetteur.getSolde() - transaction.getMontant();
        if (nouveauSoldeEmetteur < 0) {
            throw new RuntimeException("Solde insuffisant pour effectuer le virement externe.");
        }
        compteEmetteur.setSolde(nouveauSoldeEmetteur);
        transactionRepository.save(transaction);
    }
}
