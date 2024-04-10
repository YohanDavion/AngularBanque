package com.banque.persistance.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.banque.persistance.model.Compte;
import com.banque.persistance.service.CompteService;

@RestController
public class CompteController {
	@Autowired
	public CompteService compteService;
	
	@GetMapping("/compte/lister")
	public ModelAndView listeComptes() {
		return new ModelAndView("listeComptes", "comptes", compteService.getComptes());
	}
	
	@GetMapping("/compte/lister/{id}")
	public ModelAndView detailCompte(@PathVariable("id") final Integer id) {
		Optional<Compte> compte = compteService.getCompte(id);
		return new ModelAndView("detailCompte","compte",compte.orElse(null));
	}
	
	@GetMapping("/compte/creer")
	public ModelAndView creerCompte() {
		return new ModelAndView("creerCompte","compte",new Compte());
	}
	
	@PostMapping("/compte/creer")
	public ModelAndView submit(@ModelAttribute("compte")Compte compte,ModelMap model) {
		model.addAttribute("numero",compte.getNumero());
		model.addAttribute("client",compte.getClient());
	
		compteService.saveCompte(compte);
		return listeComptes();
	}
}
