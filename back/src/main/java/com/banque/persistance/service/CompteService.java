package com.banque.persistance.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banque.persistance.model.Compte;
import com.banque.persistance.repository.CompteRepository;

import lombok.Data;

@Data
@Service
public class CompteService {
	@Autowired
	private CompteRepository compteRepository;
	
	public List<Compte> getCompte(final Integer id){
		return compteRepository.findByClientId(id);
	}
	
	public Iterable<Compte> getAllComptes(){
		return compteRepository.findAll();
	}
	
	public void deleteCompte(final Integer id) {
		compteRepository.deleteById(id);
	}
	
	public Compte saveCompte(Compte compte) {
		return compteRepository.save(compte);
	}

	public Long countAllComptes() {
		return compteRepository.count();
	}
	
	public Double countAllBalances(){
		return ((Collection<Compte>) compteRepository.findAll()).stream()
			.mapToDouble(Compte::getBalance)
			.sum();
	}
}
