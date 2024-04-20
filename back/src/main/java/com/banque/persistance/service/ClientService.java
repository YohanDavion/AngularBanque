package com.banque.persistance.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banque.persistance.model.Client;
import com.banque.persistance.repository.ClientRepository;
import com.banque.persistance.repository.CompteRepository;

import lombok.Data;

@Data
@Service
public class ClientService {

	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private CompteRepository compteRepository;
	
	public Optional<Client> getClient(final Integer id){
		return clientRepository.findById(id);
	}

    public Iterable<Client> getAllClients() {
        return clientRepository.findAll();
    }

	public Iterable<Client> getClient(){
		return clientRepository.findAll();
	}
		
	public void deleteClient(final Integer id) {
		compteRepository.deleteByClientId(id);
		clientRepository.deleteById(id);
	}
	
	public Client saveClient(Client client) {
		return clientRepository.save(client);
	}

	public Long countAllClients() {
		return clientRepository.count();
	}
}
