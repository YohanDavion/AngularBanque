package com.banque.persistance.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.banque.persistance.model.Client;
import com.banque.persistance.service.ClientService;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {
	
	@Autowired
	private ClientService clientService;

	@GetMapping("/liste")
    public Iterable<Client> getAllClients() {
        return clientService.getAllClients();
    }

	/*@GetMapping("/lister/{id}")
	public ModelAndView detailClient(@PathVariable("id") final Integer id) {
		Optional<Client> client = clientService.getClient(id);
		return new ModelAndView("detailClient","client",client.orElse(null));
	}*/

	@PostMapping("/creer")
	public Client creerClient(@RequestBody Client client) {
		return clientService.saveClient(client);
	}
}
