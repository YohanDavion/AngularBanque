package com.banque.persistance.interceptor;

import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LogInterceptor {

    @Pointcut("execution(* com.banque.persistance.service.TransactionService.*(..))")
    private void transactionOperations() {}

    @AfterReturning("transactionOperations()")
    public void logTransaction() {
    	// Ici que je trace les logs des transactions mais j'ai des erreurs 500 lors de l'enregistrement
    }
}
