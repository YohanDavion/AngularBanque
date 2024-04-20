package com.banque.persistance.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@GetMapping("/liste/{id}")
    public Optional<Client> getClient(@PathVariable("id") final Integer id) {
        return clientService.getClient(id);
    }
	
	@GetMapping("/countAll")
	public Long countAllClients() {
		return clientService.countAllClients();
	}
	
	@PostMapping("/creer")
	public Client creerClient(@RequestBody Client client) {
		return clientService.saveClient(client);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteClient(@PathVariable Integer id) {
		clientService.deleteClient(id);
	}
}
