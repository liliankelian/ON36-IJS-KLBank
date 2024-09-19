import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountRepository } from '../application/ports/account.repository';
import { AccountFactory } from '../domain/factories/account.factory';
import { AccountType } from '../../commom/types/account.type';
import { Account } from '../domain/models/account'

@Injectable()
export class AccountService {
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
        isManager:boolean,
        
   ): Account {
       const accounts = this.accountRepository.readAccount();

       if(!isManager){
            throw new NotFoundException('Somente o gerente pode abrir uma conta')
       }
   
       const newAccount = this.accountFactory.createAccount(
                                  type,
                                  this.idCounter,
                                  clientID
                                );
   
       accounts.push(newAccount);

       this.accountRepository.writeAccount(accounts);
   
       return newAccount;
    }
        
}
