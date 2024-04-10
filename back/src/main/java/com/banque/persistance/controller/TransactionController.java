package com.banque.persistance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.banque.persistance.model.Transaction;
import com.banque.persistance.service.TransactionService;

@RestController
public class TransactionController {

    @Autowired
    private TransactionService transactionService;
    
    @PostMapping("/transaction/retrait")
    public void retrait(@RequestBody Transaction transaction) {
        transactionService.effectuerRetrait(transaction);
    }

    @PostMapping("/transaction/virement-interne")
    public void virementInterne(@RequestBody Transaction transaction) {
        transactionService.effectuerVirementInterne(transaction);
    }

    @PostMapping("/transaction/virement-externe")
    public void virementExterne(@RequestBody Transaction transaction) {
        transactionService.effectuerVirementExterne(transaction);
    }
}
