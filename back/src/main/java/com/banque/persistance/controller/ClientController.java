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

import com.banque.persistance.model.Client;
import com.banque.persistance.service.ClientService;



@RestController
public class ClientController {
	
	@Autowired
	private ClientService clientService;
	
	@GetMapping("/client/lister")
	public ModelAndView listeClients() {
		return new ModelAndView("listeClients","clients",clientService.getClient());
	}

	@GetMapping("/client/lister/{id}")
	public ModelAndView detailClient(@PathVariable("id") final Integer id) {
		Optional<Client> client = clientService.getClient(id);
		return new ModelAndView("detailClient","client",client.orElse(null));
	}
	
	@GetMapping("/client/creer")
	public ModelAndView creerClient() {
		Client c= new Client();
		return new ModelAndView("creerClient","client",c);
	}
	
	@PostMapping("/client/creer")
	public ModelAndView submit(@ModelAttribute("client") Client client, ModelMap model) {
		model.addAttribute("nom",client.getNom());
		model.addAttribute("prenom",client.getPrenom());
		System.out.print("CREER");
		clientService.saveClient(client);
		return listeClients();
	}
}
