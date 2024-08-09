import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountRepository } from 'src/_repositories/account.repository';
import { AccountFactory } from './account.factory';
import { AccountType } from './account.type';
import { Account } from './account';

@Injectable()
export class AccountService {
    /*
        Incluir métodos que irá permitir abrir uma conta, fechar uma conta 
        e modificar o tipo da conta se é uma poupança ou conta corrente

        Atualizar a classe Conta para manter uma referência ao cliente associado a ela.

        ID: number;
        balance: number;  
        clientID: number;
    
    */
    private idCounter: number;

    constructor(
        private readonly accountRepository:AccountRepository,
        private readonly accountFactory: AccountFactory
    ){
        const accounts = this.accountRepository.readAccount();
        this.idCounter = accounts.length > 0 ? accounts[accounts.length - 1].ID + 1 : 1;
    }

   createAccount(
        type: AccountType, 
        clientID:number, 
        balance:number,
        isManager:boolean,
        rate?:number,
        limit?:number
   ): Account {
       const accounts = this.accountRepository.readAccount();

       if(!isManager){
            throw new NotFoundException('Somente o gerente pode abrir uma conta')
       }
   
       const newAccount = this.accountFactory.createAccount(
                                  type,
                                  this.idCounter,
                                  clientID,
                                  balance,
                                  rate,
                                  limit
                                );
   
       accounts.push(newAccount);

       this.accountRepository.writeAccount(accounts);
   
       return newAccount;
    }
        
}
