package com.banque.persistance.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banque.persistance.model.Virement;
import com.banque.persistance.repository.VirementRepository;

@Service
public class VirementService {
    @Autowired
    private VirementRepository virementRepository;

    public Virement saveVirement(Virement virement) {
        return virementRepository.save(virement);
    } 
}