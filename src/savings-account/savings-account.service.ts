import { Injectable, NotFoundException } from '@nestjs/common';
import { SavingsAccount } from './savings-account';
import { SavingsAccountRepository } from 'src/_repositories/savings-account.repository';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class SavingsAccountService {

    /*
        Incluir métodos que irá permitir abrir uma conta, fechar uma conta 
        e modificar o tipo da conta se é uma poupança ou conta corrente

        Atualizar a classe Conta para manter uma referência ao cliente associado a ela.
    */

    constructor(
        private readonly savingsRepository: SavingsAccountRepository,
        private readonly clientService: ClientService
    ){}

    create(clientID:number, balance:number, rate: number, isManager: boolean): SavingsAccount{

        if(!isManager){
            throw new NotFoundException(`Somente gerente tem acesso a criar uma conta`)
        }

        const client = this.clientService.findById(clientID)
        if(!client){
            throw new NotFoundException(`Cliente com o ID ${clientID} não foi encontrado`)
        }

        const savings = this.savingsRepository.readSavingsAccount()
        const newSaving = new SavingsAccount (
            savings.length > 0 ? savings[savings.length -1].ID + 1 : 1,
            clientID,
            balance,
            rate
        )
        savings.push(newSaving);
        this.savingsRepository.writeSavingsAccount(savings);
        this.clientService.addAccountToClient(clientID,newSaving)
        return newSaving
    }

    findById(id:number): SavingsAccount{
        const savings = this.savingsRepository.readSavingsAccount();
        const saving = savings.find(saving => saving.ID === id);

        if(!saving){
            console.log(`Poupança com o ID ${id} não encontrado`)
        }

        return saving;
    }

    findAll():SavingsAccount[]{
        return this.savingsRepository.readSavingsAccount();
    }

    updateBalance(id:number, balance: number): SavingsAccount{
        const savings = this.savingsRepository.readSavingsAccount();
        const saving = savings.find(saving => saving.ID === id);
        
        saving.balance = balance;
        this.savingsRepository.writeSavingsAccount(savings);
        return saving

    }

    remove(id:number):void{
        const savings = this.savingsRepository.readSavingsAccount();
        const savingIndex = savings.findIndex(saving => saving.ID === id);

        savings.splice(savingIndex, 1)

        this.savingsRepository.writeSavingsAccount(savings)
    }

}
