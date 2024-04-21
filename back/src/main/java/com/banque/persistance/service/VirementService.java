package com.banque.persistance.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banque.persistance.model.Virement;
import com.banque.persistance.repository.CompteRepository;
import com.banque.persistance.repository.VirementRepository;

@Service
public class VirementService {
    @Autowired
    private VirementRepository virementRepository;
    @Autowired
	private CompteRepository compteRepository;

    public Virement saveVirement(Virement virement) {
        compteRepository.findById(virement.getIdCompteEmetteur()).ifPresent(compteEmetteur -> {
            compteEmetteur.setBalance(compteEmetteur.getBalance() - virement.getMontant());
            compteRepository.save(compteEmetteur);
        });
        compteRepository.findById(virement.getIdCompteDestinataire()).ifPresent(compteDestinataire -> {
            compteDestinataire.setBalance(compteDestinataire.getBalance() + virement.getMontant());
            compteRepository.save(compteDestinataire);
        });
        return virementRepository.save(virement);
    }

    public Long countAllVirements() {
		return virementRepository.count();
	}

    public Iterable<Virement> getAllVirements() {
        return virementRepository.findAll();
    }
}