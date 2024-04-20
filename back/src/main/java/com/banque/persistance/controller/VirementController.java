package com.banque.persistance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banque.persistance.model.Virement;
import com.banque.persistance.service.VirementService;

@RestController
@RequestMapping("/virements")
@CrossOrigin(origins = "http://localhost:4200")
public class VirementController {
    @Autowired
    public VirementService virementService;

    @PostMapping("/creer")
    public Virement creerVirement(@RequestBody Virement virement) {
        return virementService.saveVirement(virement);
    }

    @GetMapping("/liste")
    public Iterable<Virement> getAllVirements() {
        return virementService.getAllVirements();
    }

    @GetMapping("/countAll")
	public Long countAllVirements() {
		return virementService.countAllVirements();
	}
}