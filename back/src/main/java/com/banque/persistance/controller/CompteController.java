package com.banque.persistance.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banque.persistance.model.Compte;
import com.banque.persistance.service.CompteService;

@RestController
@RequestMapping("/comptes")
@CrossOrigin(origins = "http://localhost:4200")
public class CompteController {
	@Autowired
	public CompteService compteService;
	
	@PostMapping("/creer")
	public Compte creerCompte(@RequestBody Compte compte) {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		compte.setNumero((timestamp.getTime()));
		return compteService.saveCompte(compte);
	}

	@GetMapping("/liste")
    public Iterable<Compte> getAllCompte() {
        return compteService.getAllComptes();
    }

	@GetMapping("liste/{id}")
	public List<Compte> detailCompte(@PathVariable("id") final Integer id) {
		return compteService.getCompte(id);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteClient(@PathVariable Integer id) {
		compteService.deleteCompte(id);
	}

	@GetMapping("/countAll")
	public Long countAllComptes() {
		return compteService.countAllComptes();
	}

	@GetMapping("/allBalance")
	public Double countAllBalance() {
		return compteService.countAllBalances();
	}
}
